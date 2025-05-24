import {Component, inject, Input, input, ViewChild} from '@angular/core';
import {
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, IonIcon,
  IonModal
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {ArtistDetailComponent} from "../artist-detail/artist-detail.component";

@Component({
  selector: 'app-artist-banner',
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule,
    ArtistDetailComponent,
    IonIcon,
  ],
  templateUrl: './artist-banner.component.html',
  styleUrl: './artist-banner.component.scss'
})
export class ArtistBannerComponent {
  @ViewChild(IonModal) modal!: IonModal;
  artistId =  input.required<string>();
  artistName =  input.required<string>();
  artistImage = input.required<string>();
  eventLocation = input.required<string>();
  eventDate = input.required<string>();
  description =  input.required<string>();
  @Input() isFavorite: Boolean = false;
}

