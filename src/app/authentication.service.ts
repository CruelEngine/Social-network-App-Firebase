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
}
