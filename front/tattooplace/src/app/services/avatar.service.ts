import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AvatarService {
  _baseURL: string = 'http://localhost:3000/member/avatar/';

  constructor (private http:HttpClient) {}

  upload(avatar):Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', avatar, avatar.name);

    return this.http.post(this._baseURL, formData)
  }
}
