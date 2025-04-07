import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ReturnButtonComponent} from '../../return-button/return-button.component';

@Component({
  selector: 'app-user-page',
  imports: [MatButtonModule, ReturnButtonComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
