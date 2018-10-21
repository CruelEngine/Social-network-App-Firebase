import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onLogin(value : Credentials){

  }

  
}
