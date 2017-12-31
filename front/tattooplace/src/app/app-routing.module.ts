import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
