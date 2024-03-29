import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
    });
  }

  getAuth() {
    // return this.afAuth.auth.onAuthStateChanged(user=>{return user});
    return this.afAuth.authState.pipe(map((auth) => auth));
  }

  logout() {
    this.afAuth.signOut();
  }

  // future use
  // register(email:string,password:string){
  //   return new Promise((resolve,reject) =>{
  //     this.afAuth.createUserWithEmailAndPassword(email,password).then(userData=>resolve(userData),err=>reject(err));
  //   })
  // }
}
