import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Tickets} from '../model/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketTableService {
  firestore =  inject(Firestore);
  constructor() {}

  getTicketsOf(): Observable<Tickets[]> {
    const ticketsRef = collection(this.firestore, 'Tickets');
    return collectionData(ticketsRef, {idField: 'id'}) as Observable<Tickets[]>;
  }
}
