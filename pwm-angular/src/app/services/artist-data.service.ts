import {inject, Injectable} from '@angular/core';
import {Artist} from '../model/artist.interface';
import {collection, collectionData, Firestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistDataService {

  firestore: Firestore = inject(Firestore);
  artists: Array<Artist> = [];

  getArtistData(): Observable<Artist[]> {
    const artistRef = collection(this.firestore, 'Artists');
    return collectionData(artistRef, {idField: 'id'}) as Observable<Artist[]>;
  }
}
