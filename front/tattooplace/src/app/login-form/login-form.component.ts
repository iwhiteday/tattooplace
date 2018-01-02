import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  onSignInSubmit() {
    this._authService.logInUser(this.signInUser).subscribe(
      response => {
        if(response.status == 200) {
          this.onFormResult.emit({signedIn: true, response});
        }
      },

      error => {
        console.log('error: ', error);
        this.onFormResult.emit({signIn: false, error});
      }
    )
  }
}
