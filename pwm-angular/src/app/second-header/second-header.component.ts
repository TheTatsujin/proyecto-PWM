import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {LoginButtonComponent} from '../login-button/login-button.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-second-header',
  imports: [CommonModule, MatButtonModule, LoginButtonComponent, NgIf],
  templateUrl: './second-header.component.html',
  styleUrl: './second-header.component.css'
})
export class SecondHeaderComponent {
  isLogged:boolean;

  constructor() {
    this.isLogged = false;
}
}
