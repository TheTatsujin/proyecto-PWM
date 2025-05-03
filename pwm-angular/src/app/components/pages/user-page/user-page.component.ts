import {Component, inject, OnInit, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ReturnButtonComponent} from '../../return-button/return-button.component';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../model/user.interface';

@Component({
  selector: 'app-user-page',
  imports: [MatButtonModule, ReturnButtonComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {

  userService = inject(UserService);
  authService = inject(AuthService);
  route = inject(ActivatedRoute);  // <-- ✅ Inyecta ActivatedRoute
  userData = signal<Array<UserInterface>>([]);

  constructor(private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const userId = params['userId'];
      if (userId) {
        this.userService.getUserById(userId)
          .subscribe((userData: UserInterface[]) => this.userService.set(userData));
      }
    });
  }

  async logoutClick() {
    this.authService.logout();
    await this.router.navigate([''], {
      queryParams: {
        userId: null,
        header: 1,
        footer: true
      }
    });
  }
}
