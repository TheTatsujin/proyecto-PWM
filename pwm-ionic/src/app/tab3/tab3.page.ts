import {Component, inject, OnInit, signal} from '@angular/core';
import { ArtistDataService } from '../services/artist-data.service';
import { Artist } from '../model/artist.interface';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  artistDataService = inject(ArtistDataService);
  artistData = signal<Array<Artist>>([])
  private subscription: Subscription | undefined;

  ionViewWillEnter() {
    this.subscription = this.artistDataService.getArtistData()
      .subscribe((artistDataList: Artist[]) => this.artistData.set(artistDataList))
  }

  ionViewWillLeave() {
    this.subscription?.unsubscribe();
  }

}
