import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from './user';
import 'firebase/database';
import { ApiPath } from './api-path.enum';
import { Observable, BehaviorSubject } from 'rxjs';


/**
 * User Service
 */

@Injectable()
export class UserService {

  private userSubject : BehaviorSubject<User> = new BehaviorSubject<User>(null);

  /**
   *
   * @param AngularFireDatabase fireDb provides the functionality for firebase Dataase
   */
  constructor(private fireDb : AngularFireDatabase) { }

  public addUser(user : User) : void {
    this.fireDb.object( `${ApiPath.USERS_CHILD}/${user.uid}`).set(user);
  }

  public getUser(uid : string) : Observable<User> {
    return this.fireDb.object<User>(`${ApiPath.USERS_CHILD}/${uid}`).valueChanges();
  }

  public saveUser(user : User){
    this.userSubject.next(user);
  }

  public savedUserPublisher() : BehaviorSubject<User> {
    return this.userSubject;
  }

  public updateName(user : User  , name : string ) : void {
    this.fireDb.object(`${ApiPath.USERS_CHILD}/${user.uid}`).update({name : name});
    this.saveUser(user);
  }

  public changeEmail(user : User , newEmail : string ) : void {
    this.fireDb.object(`${ApiPath.USERS_CHILD}/${user.uid}`).update({email : newEmail});
    this.saveUser(user);
  }

  public updateMobile(user : User , mobile : string ) : void {
    this.fireDb.object(`${ApiPath.USERS_CHILD}/${user.uid}`).update({mobile:mobile});
    this.saveUser(user);
  }
}
