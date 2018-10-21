import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  navigationItems : Array<{name :string , value : string , path : string}> = [];
  constructor() { }

  ngOnInit() {
    this.navigationItems.push({ name : 'My Profile' , value : 'myprofile' , path : '/myprofile'});
    this.navigationItems.push({name : 'About' , value : 'about' , path :'/about'});
    this.navigationItems.push({name : 'Friends' , value : 'friends' , path : '/friends'});
  }

}
