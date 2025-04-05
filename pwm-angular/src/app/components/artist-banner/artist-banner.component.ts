import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-artist-banner',
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatButton
  ],
  templateUrl: './artist-banner.component.html',
  styleUrl: './artist-banner.component.css'
})
export class ArtistBannerComponent {
  artistName: string = "Pedro el guaperas";

}
