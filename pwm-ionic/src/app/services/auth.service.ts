import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isLoggedInSubject.asObservable();

  private authCheckCompletedSubject = new BehaviorSubject<boolean>(false);
  authCheckCompleted$ = this.authCheckCompletedSubject.asObservable();

  private user = new BehaviorSubject<User>;
  user$ = this.user.asObservable();

  constructor(private firebaseAuth: Auth) {
    onAuthStateChanged(this.firebaseAuth, (user: User | null) => {
      console.log('✅ Firebase auth state changed:', user);
      this.isLoggedInSubject.next(!!user);
      this.authCheckCompletedSubject.next(true);
    });
  }

  logout() {
    this.firebaseAuth.signOut().then(() => {
      this.isLoggedInSubject.next(false);
    });
  }

  registerUser(newUser: UserInterface): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.firebaseAuth, newUser.email, newUser.password);
  }
}
