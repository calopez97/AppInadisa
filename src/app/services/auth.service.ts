import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { map } from 'rxjs/operators'
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(email:string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData)),
      err => reject(err);
    });
  }

  LoginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject(err));
    })
  }

  LogoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAut() {
    return this.afsAuth.authState.pipe(map(auth => auth ));
  }

}