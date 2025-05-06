import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {TicketsInterface} from '../model/tickets.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketTableService {
  firestore =  inject(Firestore);
  constructor() {}

  getTicketsOf(): Observable<TicketsInterface[]> {
    const ticketsRef = collection(this.firestore, 'Tickets');
    return collectionData(ticketsRef, {idField: 'id'}) as Observable<TicketsInterface[]>;
  }
}
