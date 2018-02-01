import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./guards/auth.guard";
import {WorkRequestComponent} from "./work-request/work-request.component";

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'work-request', component: WorkRequestComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
