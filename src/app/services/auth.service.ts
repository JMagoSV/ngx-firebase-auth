import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authStatusSubject: BehaviorSubject<User> = new BehaviorSubject(undefined);
  public authStatus: Observable<User> = this.authStatusSubject.asObservable();

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private route: Router
  ) {
    this.authStatusListener();
  }

  authStatusListener() {
    this.afAuth.authState.subscribe(credenciales => {
      if (credenciales) {
        this.authStatusSubject.next(this.handle(credenciales));
      }
    });
    this.afAuth.onAuthStateChanged(credenciales => {
      if (credenciales) {
        this.authStatusSubject.next(this.handle(credenciales));
      } else {
        this.authStatusSubject.next(undefined);
      }
    });
  }

  handle(credenciales) {
    return {
      uid: credenciales.uid,
      email: credenciales.email,
      displayName: credenciales.displayName,
      photoURL: credenciales.photoURL,
      emailVerified: credenciales.emailVerified
    } as User;
  }

  /* Login utilizando Email */
  emailLogin(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
      this.route.navigateByUrl('/main');
    });
  }

  /* Login utilizando Google */
  googleLogin() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider).then(value => {
      this.route.navigateByUrl('/main');
    });
  }

  /* Login utilizando Facebook */
  facebookLogin() {
    const provider = new firebase.default.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider).then(value => {
      this.route.navigateByUrl('/main');
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }

  async logout() {
    await this.afAuth.signOut();
    this.route.navigate(['/']);
  }

  singUp(user: User) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(_result => {
      window.alert('Usuario creado');
    });
  }
}
