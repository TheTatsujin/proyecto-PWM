import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {TicketPageComponent} from './components/pages/ticket-page/ticket-page.component';

@Component({
  selector: 'app-root',
  imports: [
    DropdownComponent,
    TicketPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwm-angular';
}
