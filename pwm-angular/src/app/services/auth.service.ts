import {inject, Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, updateProfile, UserCredential} from "@angular/fire/auth";
import {UserInterface} from "../model/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  firebaseAuth = inject(Auth);
  constructor() { }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  authenticate(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }

  registerUser(newUser: UserInterface): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.firebaseAuth, newUser.email, newUser.password)
  }
}
