import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {UserInterface} from './model/user.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private firestore: Firestore) {}

  getUsers() : Observable<UserInterface[]> {
    const usersRef = collection(this.firestore, 'Users');
    return collectionData(usersRef, {idField:"id"}) as Observable<UserInterface[]>;
  }
}
