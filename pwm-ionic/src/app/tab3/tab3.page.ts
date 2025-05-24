import {Component, inject, OnInit, signal} from '@angular/core';
import { ArtistDataService } from '../services/artist-data.service';
import { Artist } from '../model/artist.interface';
import {Subscription} from "rxjs";
import {DbService} from "../services/db.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  artistDataService = inject(ArtistDataService);
  artistData = signal<Array<Artist>>([])
  artistFavorites = signal<Record<string, boolean>>({});
  private databaseService = inject(DbService);
  private subscription: Subscription | undefined;
  protected favourite = false;

  ionViewWillEnter() {
    this.subscription = this.artistDataService.getArtistData()
      .subscribe(async (artistDataList: Artist[]) => {
        this.artistData.set(artistDataList);
        const favoritesIds = await this.databaseService.getFavorites();
        const favs: Record<string, boolean> = {};
        favoritesIds.forEach((favId: string) => {
          favs[favId] = true;
        });

        this.artistFavorites.set(favs);
      });
  }

  ionViewWillLeave() {
    this.subscription?.unsubscribe();
  }
}
