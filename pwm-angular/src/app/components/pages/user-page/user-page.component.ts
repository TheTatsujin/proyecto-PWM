import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ReturnButtonComponent} from '../../return-button/return-button.component';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../model/user.interface';
import {NgIf, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-user-page',
  imports: [MatButtonModule, ReturnButtonComponent, NgIf, NgOptimizedImage],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  userService = inject(UserService);
  authService = inject(AuthService);
  userData = signal<UserInterface | null>(null);

  constructor(private router: Router) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(userId)
        .subscribe((userData: UserInterface | null) => {
          if (userData) {
            this.userData.set(userData);
          }
        });
    }
  }

  user = computed(() => this.userData());

  async logoutClick() {
    this.authService.logout();
    localStorage.removeItem('userId');
    await this.router.navigate([''], {
      queryParams: {
        header: 1,
        footer: true
      }
    });
  }
}
