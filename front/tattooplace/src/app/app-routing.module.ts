import { NgModule } from '@angular/core';
import { HeroesComponent } from "./heroes/heroes.component";
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroRegistrationComponent} from './hero-registration/hero-registration.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registration', component: HeroRegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
