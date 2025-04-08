import { Injectable } from '@angular/core';
import {Artist} from '../model/artist.type';

@Injectable({
  providedIn: 'root'
})
export class ArtistDataService {
  artists: Array<Artist> = [
    {
      id: 1,
      name: "void()",
      image: "#",
      debutLocation: "Arquitectura",
      debutDate: "10-05-2025",
    },
    {
      id: 2,
      name: "DJ Santa",
      image: "#",
      debutLocation: "Telecomunicaciones",
      debutDate: "11-05-2025",
    },
    {
      id: 3,
      name: "Pinky Punk",
      image: "#",
      debutLocation: "Telecomunicaciones",
      debutDate: "12-05-2025"
    },
    {
      id: 4,
      name: "Gothark",
      image: "#",
      debutLocation: "Arquitectura",
      debutDate: "10-05-2025"
    }
  ];

  constructor() {
  }

  getArtistData(){
    return this.artists;
  }
}
