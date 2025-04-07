import { Component } from '@angular/core';
import {ReturnButtonComponent} from '../../return-button/return-button.component';
import {FooterComponent} from '../../footer/footer.component';

@Component({
  selector: 'app-user-page-page',
  imports: [
    FooterComponent
  ],
  templateUrl: './user-page-template.component.html',
  styleUrl: './user-page-template.component.css'
})
export class UserPageTemplateComponent {

}
