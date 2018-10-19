import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

//Auth
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//services 

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { SignupComponent } from './authentication/signup/signup.component';
import { Passwordequalvalidator } from './utils/password-equal-validator.directive';


//Material Imports
import { MatCheckboxModule , MatInputModule , MatFormFieldModule,MatRadioModule,MatButtonModule  } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    Passwordequalvalidator,
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
    MatButtonModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
