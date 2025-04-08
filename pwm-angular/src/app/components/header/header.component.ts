import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {LoginButtonComponent} from '../login-button/login-button.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatButtonModule, LoginButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged:boolean;

  constructor() {
    this.isLogged = false;
  }
}
