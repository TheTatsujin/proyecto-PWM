import {Component, input} from '@angular/core';

@Component({
  selector: 'app-artist-banner',
  imports: [],
  templateUrl: './artist-banner.component.html',
  styleUrl: './artist-banner.component.css'
})
export class ArtistBannerComponent {
  artistName =  input.required<string>();
  artistImage = input.required<string>();
  eventLocation = input.required<string>();
  eventDate = input.required<string>();
}
