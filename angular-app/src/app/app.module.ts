import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
