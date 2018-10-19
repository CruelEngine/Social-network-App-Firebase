import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Gender } from '../gender';
import { AuthenticationService } from '../../authentication.service';
import {  MatDialog } from '@angular/material';
import { ErrorAlertComponent } from 'src/app/error-alert/error-alert.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signUpForm : FormGroup;
  genders : any;
  errorMessage: string;
  showError : boolean = false;

  constructor(private fb : FormBuilder , private _authenticationService : AuthenticationService , private _matDialog : MatDialog) {
    this.genders = [
      {name : Gender.MALE , value : Gender.MALE },
      {name : Gender.FEMALE , value : Gender.FEMALE}
    ];
    this.signUpForm = fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
      retypePassword : ['',Validators.required],
      mobile : ['',Validators.required],
      gender : [Gender.MALE ,Validators.required] ,
    });
  }


  ngOnInit() {
  }

  onSignUp(value : any){
    this._authenticationService.signUpWithEmail(value.email , value.password).then((userInfo: any)=>{
      console.log(userInfo)
    }).catch((error) =>{
      this.errorMessage = error.message;
      this.showError = true;
      this._matDialog.open(ErrorAlertComponent , {
        width:'250px',
        data:this.errorMessage
      })
    })
  }

}
