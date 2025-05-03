import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {LoginButtonComponent} from '../login-button/login-button.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatButtonModule, LoginButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged:boolean;
  authService = inject(AuthService);

  constructor() {
    this.isLogged = this.authService.isAuthenticated();
  }
}
