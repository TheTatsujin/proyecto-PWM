import {Component, EventEmitter, inject, Input, OnInit, Output, ViewChild} from '@angular/core';
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
  @Input() artistId: string = '';
  @Input() artistName: string = '';
  @Input() artistImage: string = '';
  @Input() artistDescription: string = '';
  private databaseService = inject(DbService);
  protected isFavorite: boolean = false;
  @Output() favoriteChanged = new EventEmitter<boolean>();
  constructor() { }


  ngOnInit() {
    this.databaseService.isFavorite(this.artistId).then(favorite => this.isFavorite = favorite!);
  }


  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.databaseService.deleteFavorite(this.artistId).then(() => {
        this.isFavorite = false;
        this.favoriteChanged.emit(false);
      });
    } else {
      this.databaseService.addFavorite(this.artistId).then(() => {
        this.isFavorite = true;
        this.favoriteChanged.emit(true);
      });
    }
  }
}
