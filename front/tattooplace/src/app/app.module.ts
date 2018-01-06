import {MaterializeModule} from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import {AuthService} from "./services/auth.service";
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "./guards/auth.guard";
import { TopWorksComponent } from './top-works/top-works.component';
import {AvatarService} from "./services/avatar.service";
import {AuthInterceptor} from "./auth-interceptor";

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
    RegisterFormComponent,
    ProfileComponent,
    TopWorksComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Angular2TokenService,
    AuthService,
    AuthGuard,
    AvatarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
