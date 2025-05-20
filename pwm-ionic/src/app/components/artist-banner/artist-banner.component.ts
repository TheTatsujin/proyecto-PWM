import {Component, input, ViewChild} from '@angular/core';
import {
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonContent, IonHeader, IonIcon, IonInput, IonItem,
  IonModal, IonTitle, IonToolbar
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {ArtistDetailComponent} from "../artist-detail/artist-detail.component";

@Component({
  selector: 'app-artist-banner',
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonModal,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    FormsModule,
    IonIcon,
    ArtistDetailComponent
  ],
  templateUrl: './artist-banner.component.html',
  styleUrl: './artist-banner.component.scss'
})
export class ArtistBannerComponent {
  @ViewChild(IonModal) modal!: IonModal;
  artistName =  input.required<string>();
  artistImage = input.required<string>();
  eventLocation = input.required<string>();
  eventDate = input.required<string>();

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  setFavourite() {
    this.modal.dismiss();
  }
}
