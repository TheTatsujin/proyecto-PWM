import {Component, input} from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-artist-banner',
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ],
  templateUrl: './artist-banner.component.html',
  styleUrl: './artist-banner.component.scss'
})
export class ArtistBannerComponent {
  artistName =  input.required<string>();
  artistImage = input.required<string>();
  eventLocation = input.required<string>();
  eventDate = input.required<string>();
}
