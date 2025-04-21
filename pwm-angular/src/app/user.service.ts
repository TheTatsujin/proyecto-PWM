import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {User} from './model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: Firestore) {}

  getUsers() : Observable<User[]> {
    const usersRef = collection(this.firestore, 'Users');
    return collectionData(usersRef, {idField:"id"}) as Observable<User[]>;
  }
}
