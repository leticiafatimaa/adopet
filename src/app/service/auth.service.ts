import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private user;

  constructor(/* 
    private afAuth: AngularFireAuth */
  ) { 
    /* this.user = afAuth.authState; */
  }

  isLoggedIn() {
    return this.user.map(user => Boolean(user));
  }

  getUser() {
    return this.user;
  }

 /*  logginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } */

}
