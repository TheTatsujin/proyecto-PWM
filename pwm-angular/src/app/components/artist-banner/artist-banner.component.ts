import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-banner',
  imports: [],
  templateUrl: './artist-banner.component.html',
  styleUrl: './artist-banner.component.css'
})
export class ArtistBannerComponent {
  artistName: string = "Pedro el guaperas";
  eventLocation: string = "Telecomunicaciones";
  eventDate: string = "20/08/3421";
}
