import {inject, Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Faq} from '../model/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  firestore = inject(Firestore);
  constructor() { }

  getFrequentlyAskedQuestions(): Observable<Faq[]> {
    const faqRef = collection(this.firestore, 'FAQ')
    return collectionData(faqRef, {idField: 'id'}) as Observable<Faq[]>;
  }
}
