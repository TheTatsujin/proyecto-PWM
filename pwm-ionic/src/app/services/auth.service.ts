import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, User, UserCredential } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isLoggedInSubject.asObservable();

  constructor(private firebaseAuth: Auth) {
    onAuthStateChanged(this.firebaseAuth, (user: User | null) => {
      this.isLoggedInSubject.next(!!user);
    });
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }

  authenticate() {
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isLoggedInSubject.next(false);
  }

  registerUser(newUser: UserInterface): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.firebaseAuth, newUser.email, newUser.password);
  }
}
