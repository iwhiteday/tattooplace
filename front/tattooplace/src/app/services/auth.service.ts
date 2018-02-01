import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Angular2TokenService} from "angular2-token";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as moment from 'moment';

@Injectable()
export class AuthService {

  static REQUIRED_HEADERS: string[] = ['access-token', 'client', 'uid'];

  _baseUrl: string = 'http://localhost:3000';
  userUrl: string = 'http://localhost:3000/member/current_user';

  constructor(public authService:Angular2TokenService, private http:HttpClient) { }

  logOutUser():Observable<Object> {
    localStorage.removeItem('expires_at');
    return this.http.delete(this._baseUrl + '/auth/sign_out').map(
      response => {
        this.clearHeaders();
        return response;
      }
    );
  }

  //TODO: rework to http with headers
  registerUser(signUpData: { email:string, password:string, passwordConfirmation:string }):Observable<Response> {
    return this.authService.registerAccount(signUpData).map(
      response => {
        return response;
      }
    );
  }

  logInUser(signInData: { email:string, password:string }):Observable<Object> {
    return this.http.post(this._baseUrl + '/auth/sign_in', signInData, { observe: 'response' }).map(
      response => {
        this.setHeaders(response.headers);
        localStorage.setItem('expires_at', JSON.stringify(moment().add(response.headers.get('expiry'), 'second').valueOf()));
        return response;
      }
    );
  }

  currentUser():Observable<Object> {
    return this.http.get(this.userUrl).map(
      response => {
        return response;
      }
    );
  }

  userSignedIn():Boolean {
    var result = moment().isBefore(moment(JSON.parse(localStorage.getItem('expires_at'))));
    if (!result) {
      this.clearHeaders()
    }
    return result
  }

  setHeaders(headers):void {
    AuthService.REQUIRED_HEADERS.forEach((key) => localStorage.setItem(key, headers.get(key)));
  }

  clearHeaders():void {
    AuthService.REQUIRED_HEADERS.forEach((key) => localStorage.removeItem(key));
  }
}
