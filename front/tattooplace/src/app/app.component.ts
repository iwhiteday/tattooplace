import {Component} from '@angular/core';
import { environment } from "../environments/environment";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init(environment.token_auth_config);
  }
}
