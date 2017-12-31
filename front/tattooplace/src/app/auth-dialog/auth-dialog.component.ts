import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  openDialog(mode: 'login' | 'register' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action:'modal', params:['open']});
  }

  closeDialog() {
    this.modalActions.emit({action:'modal', params:['close']});
  }

  ngOnInit() {
  }

  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}

  onLoginFormResult(event) {
    if(event.signedIn) {
      this.closeDialog();
    } else {
      alert(event.error.errors[0])
    }
  }

  onRegisterFormResult(event) {
    if(event.signedUp) {
      this.closeDialog();
    } else {
      alert(event.error.errors.full_messages[0])
    }
  }
}
