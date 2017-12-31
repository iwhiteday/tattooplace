import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private tokenAuthService:Angular2TokenService) { }

  ngOnInit() {
  }

  onSignUpSubmit() {
    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(
      response => {
        if (response.status == 200) {
          this.onFormResult.emit({signedUp: true, response});
        }
      },

      error => {
        console.log('error', error.json());
        this.onFormResult.emit({signedUp: false, error});
      }
    )
  }
}
