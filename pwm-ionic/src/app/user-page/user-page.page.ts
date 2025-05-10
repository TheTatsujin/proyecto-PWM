import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {logOut} from "ionicons/icons";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
  standalone: false
})
export class UserPagePage implements OnInit {

  authService = inject(AuthService);
  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
