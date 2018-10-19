import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Gender } from '../gender';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signUpForm : FormGroup;
  genders : any;
  constructor(private fb : FormBuilder) {
    this.genders = [
      {name : Gender.MALE , value : Gender.MALE },
      {name : Gender.FEMALE , value : Gender.FEMALE}
    ]
    this.signUpForm = fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
      retypePassword : ['',Validators.required],
      mobile : ['',Validators.required],
      gender : [Gender.MALE ,Validators.required] ,
    })
  }


  ngOnInit() {
  }

  onSignUp(value : any){
    console.log(value);
  }

}
