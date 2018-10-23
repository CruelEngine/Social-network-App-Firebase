import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';



// Component
import { AppComponent } from './app.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SignupComponent } from './authentication/signup/signup.component';


import { AuthenticationModule } from './authentication/authentication.module';
import { MainappModule } from './mainapp/mainapp.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Auth
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// services

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { Passwordequalvalidator } from './utils/password-equal-validator.directive';


// Material Imports

import { MatCheckboxModule , MatInputModule ,
         MatFormFieldModule , MatRadioModule ,
         MatButtonModule , MatCardModule ,
         MatDialogModule   } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    Passwordequalvalidator,
    ErrorAlertComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AuthenticationModule,
    MatFormFieldModule ,
    MatCheckboxModule ,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MainappModule
  ],
  exports : [MatFormFieldModule] ,
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthenticationService,
    UserService
  ],
  entryComponents : [ErrorAlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
