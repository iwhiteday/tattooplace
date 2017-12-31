import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public tokenAuthService:Angular2TokenService) { }

  ngOnInit() {
  }

  presentAuthDialog(mode?: 'login' | 'register') {
    this.authDialog.openDialog(mode);
  }
}