import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {IonicModule} from "@ionic/angular";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [
    IonicModule,
    AsyncPipe,
    NgIf
  ]
})

export class TabsPage {
  authReady$: Observable<boolean>;
  authenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.authReady$ = this.authService.authCheckCompleted$;
    this.authenticated$ = this.authService.isAuthenticated$;
  }
}
