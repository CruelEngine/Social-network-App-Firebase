import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


/**
 * Authentication service using firebase
 */


@Injectable()
export class AuthenticationService {

  /**
   *
   * @param AngularFireAuth provides the functionalities for authentication
   */
  constructor(private angularFireAuth : AngularFireAuth) { }

  public signUpWithEmail(email : string , password : string) : Promise<any>{
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  public login(email : string , password : string) : Promise<any>{
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email , password);
  }

  public resetPassword(email : string) : Promise<any>{
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  public isAuthenticated() : boolean {
    let user = this.angularFireAuth.auth.currentUser;
    return user ? true : false;
  }

  public signOut(){
    this.angularFireAuth.auth.signOut();
  }

  public changeEmail(email : string ) : Promise<any> {
    return this.angularFireAuth.auth.currentUser.updateEmail(email);
  }

  public changePassword(password : string) : Promise<any> {
    return this.angularFireAuth.auth.currentUser.updatePassword(password);
  }

}
