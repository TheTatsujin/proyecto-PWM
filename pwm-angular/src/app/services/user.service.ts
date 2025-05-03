import { Injectable } from '@angular/core';
import {
  addDoc, collection, doc,
  docData, Firestore, getDocs,
  query, where
} from '@angular/fire/firestore';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {UserInterface} from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: Firestore) {}

  async getUserByEmail(user: FormGroup) {
    const email = user.value.email;
    const usersRef = collection(this.firestore, 'Users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data() as { email: string; password: string };
      return {
        id: doc.id,
        email: data.email,
        password: data.password
      };
    }
    return null;
  }

  getUserById(id: string): Observable<UserInterface> {
    const userDoc = doc(this.firestore, 'Users', id);
    return docData(userDoc, { idField: 'id' }) as Observable<UserInterface>;
  }

  addUsers(user: FormGroup) {
    const usersRef = collection(this.firestore, 'Users');
    return addDoc(usersRef, user);
  }
}
