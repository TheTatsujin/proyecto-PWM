import { Component, computed, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../model/user.interface';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
  standalone: false
})
export class UserPagePage implements OnInit {

  userData = signal<UserInterface | null>(null);

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    console.log('Constructor de UserPagePage ejecutado');
  }

  ngOnInit() {
    console.log('ngOnInit ejecutado');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ejecutado');
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(userId).subscribe((userData: UserInterface | null) => {
        if (userData) {
          this.userData.set(userData);
          console.log('Datos de usuario cargados:', userData);
        } else {
          console.log('No se encontraron datos para el usuario');
        }
      });
    } else {
      console.log('No hay userId en localStorage');
    }
  }

  user = computed(() => this.userData());

  async logoutClick() {
    this.authService.logout();
    localStorage.removeItem('userId');
    await this.router.navigate(['']);
  }
}
