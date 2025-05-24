import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
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
import {DbService} from "../../services/db.service";
import {ViewWillEnter} from "@ionic/angular";

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
export class ArtistDetailComponent  implements OnInit, ViewWillEnter {
  @ViewChild(IonModal) modal!: IonModal;
  @Input() artistId: string = '';
  @Input() artistName: string = '';
  @Input() artistImage: string = '';
  @Input() artistDescription: string = '';
  private databaseService = inject(DbService);
  protected isFavorite: boolean = false;
  constructor() { }

  ngOnInit() {}

  async ionViewWillEnter() {
    const favorite = await this.databaseService.isFavorite(this.artistId);
    if (favorite) this.isFavorite = true;
  }


  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  toggleFavorite() {
    if (this.isFavorite) this.databaseService.deleteFavorite(this.artistId).then(r => this.isFavorite = false);
    else this.databaseService.addFavorite(this.artistId).then(r => this.isFavorite = true);
  }
}
