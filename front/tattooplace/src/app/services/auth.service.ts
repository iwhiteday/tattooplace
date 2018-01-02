import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Subject} from "rxjs/Subject";
import {Angular2TokenService} from "angular2-token";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public authService:Angular2TokenService) {
    this.authService.validateToken().subscribe(
      response => response.status == 200 ? this.userSignedIn$.next(response.json().success) : this.userSignedIn$.next(false)
    )
  }

  logOutUser():Observable<Response> {
    return this.authService.signOut().map(
      response => {
        this.userSignedIn$.next(false);
        return response;
      }
    );
  }

  registerUser(signUpData: { email:string, password:string, passwordConfirmation:string }):Observable<Response> {
    return this.authService.registerAccount(signUpData).map(
      response => {
        this.userSignedIn$.next(true);
        return response;
      }
    );
  }

  logInUser(signInData: { email:string, password:string }):Observable<Response> {
    return this.authService.signIn(signInData).map(
      response => {
        this.userSignedIn$.next(true);
        return response;
      }
    );
  }
}
