import {MaterializeModule} from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { LengthPipe } from './length.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatStepperModule
} from "@angular/material";
import { KeysPipe } from './keys.pipe';
import { RegistrationComponent } from './registration/registration.component';
import {Angular2TokenService} from "angular2-token";
import {HttpModule} from "@angular/http";
import { HomepageComponent } from './homepage/homepage.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LengthPipe,
    KeysPipe,
    RegistrationComponent,
    HomepageComponent,
    AuthDialogComponent,
    NavigationComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MaterializeModule
  ],
  providers: [ Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
