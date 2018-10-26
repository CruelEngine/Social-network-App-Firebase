import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user : User;

  constructor(private _userService : UserService) {
    this.user = this._userService.savedUserPublisher().getValue();
  }

  ngOnInit() {

  }

}
