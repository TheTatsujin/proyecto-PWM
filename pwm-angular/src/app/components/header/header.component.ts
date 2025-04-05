import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {LoginButtonComponent} from '../login-button/login-button.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatButtonModule, LoginButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged:boolean;

  constructor() {
    this.isLogged = false;
  }
}
