import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from "@angular/forms";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from "./hero.service";
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { LengthPipe } from './length.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatStepperModule
} from "@angular/material";
import { HeroRegistrationComponent } from './hero-registration/hero-registration.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    DashboardComponent,
    LengthPipe,
    HeroRegistrationComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
