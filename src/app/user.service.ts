import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from './user';
import 'firebase/database';
// import { USERS_CHILD } from './database-constants';

/**
 * User Service
 */

@Injectable()
export class UserService {


  /**
   * 
   * @param AngularFireDatabase fireDb provides the functionality for firebase Dataase 
   */
  constructor(private fireDb : AngularFireDatabase) { }

  public addUser(user : User) : void {
    // this.fireDb.object(`${USER_CHILD}/${user.uid}`).set(user);
  }

}
