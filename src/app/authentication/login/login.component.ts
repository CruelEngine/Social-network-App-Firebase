import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/credentials';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { ErrorAlertComponent } from 'src/app/error-alert/error-alert.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  errorMessage : string;
  user : any;

  constructor(private _fb: FormBuilder ,
    private _authenticationService: AuthenticationService ,
     private _matDialog : MatDialog ,
     private _router : Router ,
      private _userService : UserService ,
      private _angularFireAuth : AngularFireAuth) {
        this._angularFireAuth.auth.onAuthStateChanged( user => {
          if(user) {
            this.getUserInfo(user.uid);
          }
        })
      }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['' , Validators.required],
      password: ['' , Validators.required]
    });
  }


  onLogin(value: any) {
    this._authenticationService.login(value.username , value.password).then( (userInfo) => {
      console.log(userInfo);
    }).catch((error) => {
      this.throwErrorPopup(error.errorMessage);
    });
  }


  throwErrorPopup( errorMessage : string){
    this._matDialog.open(ErrorAlertComponent , {
      width: '250px',
      data: errorMessage
    });
  }


  getUserInfo(uid : string){
    this._userService.getUser(uid).subscribe( snapshot => {
      this.user = snapshot;
    })
  }

  toSignUp(){
    this._router.navigate(['/signup']);
  }


}
