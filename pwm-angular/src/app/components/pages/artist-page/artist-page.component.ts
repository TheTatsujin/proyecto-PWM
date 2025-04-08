import {Component, inject, OnInit, signal} from '@angular/core';
import {ArtistBannerComponent} from '../../artist-banner/artist-banner.component';
import {ArtistDataService} from '../../../services/artist-data.service';
import {Artist} from '../../../model/artist.type';

@Component({
  selector: 'app-artist-page',
  imports: [
    ArtistBannerComponent
  ],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.css'
})
export class ArtistPageComponent implements OnInit {
  artistDataService = inject(ArtistDataService);
  artistData = signal<Array<Artist>>([])
  ngOnInit() {
    this.artistData.set(this.artistDataService.getArtistData());
  }
}
