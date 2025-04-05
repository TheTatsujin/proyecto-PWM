import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Urls
  @Input() instagramLink: string = "#";
  @Input() tiktokLink: string = "#";
  @Input() youtubeLink: string = "#";
  @Input() twitterLink: string = "#";

  // Icons
  @Input() instagramIconLink: string = "#";
  @Input() tiktokIconLink: string = "#";
  @Input() youtubeIconLink: string = "#";
  @Input() twitterIconLink: string = "#";

  @Input() telephoneIconLink: string = "";
  @Input() messageIconLink: string = "";
  @Input() emailIconLink: string = "";


  // Contact info
  @Input() telephoneNumber: string = "";
  @Input() messageNumber: string = "";
  @Input() email: string = "";

}
