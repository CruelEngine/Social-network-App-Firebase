import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user : User;
  userForm : FormGroup

  constructor(private _userService : UserService , private _fb : FormBuilder) {
    this.user = this._userService.savedUserPublisher().getValue();

    if(this.user == null){
      this.user = {name : '' , email : '' , mobile : '' , uid : '' , friendCount : '0' , image : ''};
    }
  }

  ngOnInit() {
    this.userForm = this._fb.group({
      'name' : [ {value : this.user.name ? this.user.name : '' , disabled : true},Validators.required],
      'email' : [ {value : this.user.email , disabled : true} , Validators.required],
      'mobile' : [ {value : this.user.mobile , disabled : true} , Validators.required],
      'password' : [ { value : '*******' , disabled : true} , Validators.required]
    });
  }

  

}
