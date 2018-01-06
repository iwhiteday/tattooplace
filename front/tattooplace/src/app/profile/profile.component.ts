import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {AvatarService} from "../services/avatar.service";
import {toast} from "angular2-materialize";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser = {};

  constructor(public authService:AuthService,
              private router:Router,
              private avatarService:AvatarService) {
    this.authService.currentUser().subscribe(
      response => this.currentUser = response
    );
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  uploadAvatar(event) {
    this.avatarService.upload(event.srcElement.files[0]).subscribe(
      response => {
        this.currentUser['avatar']['url'] = response.new_url;
        toast(response.message);
      }
    );
  }
}
