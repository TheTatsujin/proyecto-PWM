import {Component, inject, OnInit, signal} from '@angular/core';
import {ArtistBannerComponent} from '../../components/artist-banner/artist-banner.component';
import {ArtistDataService} from '../../services/artist-data.service';
import {Artist} from '../../model/artist.interface';

@Component({
  selector: 'app-artist-page',
  imports: [
    ArtistBannerComponent
  ],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss'
})
export class ArtistPageComponent implements OnInit {
  artistDataService = inject(ArtistDataService);
  artistData = signal<Array<Artist>>([])
  ngOnInit() {
    this.artistDataService.getArtistData()
      .subscribe((artistDataList: Artist[]) => this.artistData.set(artistDataList))
  }
}
