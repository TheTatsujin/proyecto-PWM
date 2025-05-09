import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  authenticated$ = this.authService.isAuthenticated$;

  constructor(private authService: AuthService) {}
}
