import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {LoginButtonComponent} from '../login-button/login-button.component';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, LoginButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
