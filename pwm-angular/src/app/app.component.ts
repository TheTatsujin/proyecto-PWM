import { Component } from '@angular/core';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ArtistBannerComponent} from "./artist-banner/artist-banner.component";


@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, ArtistBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwm-angular';
}
