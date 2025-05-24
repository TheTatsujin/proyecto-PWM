import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal, IonText,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
  imports: [
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonIcon,
    IonContent,
    IonText
  ]
})
export class ArtistDetailComponent  implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() artistName: string = '';
  @Input() artistImage: string = '';
  @Input() artistDescription: string = '';
  constructor() { }

  ngOnInit() {}

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  toggleFavorite() {
    console.log('TogleFavorite');
  }
}
