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
  @Input() instagramIconLink: string = "https://raw.githubusercontent.com/TheTatsujin/proyecto-PWM/refs/heads/sprint-2/web/images/icons/instagram-icon.svg";
  @Input() tiktokIconLink: string = "https://github.com/TheTatsujin/proyecto-PWM/raw/refs/heads/sprint-2/web/images/icons/tiktok-icon.svg";
  @Input() youtubeIconLink: string = "https://github.com/TheTatsujin/proyecto-PWM/raw/refs/heads/sprint-2/web/images/icons/youtube-icon.svg";
  @Input() twitterIconLink: string = "https://github.com/TheTatsujin/proyecto-PWM/raw/refs/heads/sprint-2/web/images/icons/twitter-icon.svg";

  @Input() telephoneIconLink: string = "https://github.com/TheTatsujin/proyecto-PWM/raw/refs/heads/sprint-2/web/images/icons/telephone-icon.svg";
  @Input() messageIconLink: string = "https://github.com/TheTatsujin/proyecto-PWM/raw/refs/heads/sprint-2/web/images/icons/message-icon.svg";
  @Input() emailIconLink: string = "https://github.com/TheTatsujin/proyecto-PWM/raw/refs/heads/sprint-2/web/images/icons/email-icon.svg";


  // Contact info
  @Input() telephoneNumber: string = "#";
  @Input() messageNumber: string = "#";
  @Input() email: string = "#";

}
