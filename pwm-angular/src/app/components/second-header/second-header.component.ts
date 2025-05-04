import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {ReturnButtonComponent} from '../return-button/return-button.component';
import {LoginButtonComponent} from '../login-button/login-button.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-second-header',
  imports: [CommonModule, MatButtonModule, ReturnButtonComponent, LoginButtonComponent],
  templateUrl: './second-header.component.html',
  styleUrl: './second-header.component.css'
})
export class SecondHeaderComponent {
  isLogged:boolean;
  authService = inject(AuthService);

  constructor() {
    this.isLogged = this.authService.isAuthenticated();
}
}
