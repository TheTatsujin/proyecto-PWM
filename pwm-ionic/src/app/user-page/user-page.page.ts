import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../model/user.interface';
import {UploadComponent} from "../components/upload/upload.component";
import {NgIf} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
  imports: [
    UploadComponent,
    NgIf,
    IonicModule,
    MatButton
  ],
  standalone: true
})
export class UserPagePage {

  userData = signal<UserInterface | null>(null); // Signal para datos del usuario

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ionViewWillEnter() {
    this.authService.user$.subscribe(user => {
      console.log('📥 Usuario recibido en user$.subscribe:', user);
      if (user) {
        this.userData.set(user);
      }
    });

    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(userId).subscribe(user => {
        console.log('🔍 getUserById response:', user);
        if (user) {
          this.authService.setUser(user);
        }
      });
    } else {
      console.warn('⚠️ No se encontró userId en localStorage');
    }
  }


  user = computed(() => {
    console.log('👤 user signal changed:', this.userData());
    return this.userData();
  });

  async logoutClick() {
    this.authService.logout();
    localStorage.removeItem('userId');
    await this.router.navigate(['']);
  }
}
