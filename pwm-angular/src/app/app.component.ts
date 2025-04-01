import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {LoginFormComponent} from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  imports: [LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwm-angular';
}
