import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ReturnButtonComponent} from '../../return-button/return-button.component';
import { MatButtonModule } from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-login-form-page',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ReturnButtonComponent,
    MatButtonModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  userService = inject(UserService);
  authService = inject(AuthService);


  loginForm: FormGroup;
  notFound = false;
  badPassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group( {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])});
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  async onFormSubmit() {
    if (this.loginForm.invalid) {return;}

    const user = await this.userService.getUserByEmail(this.loginForm);

    if (!user) {
      this.notFound = true;
      return;
    }

    if (user.password === this.loginForm.value.password) {
      this.authService.authenticate();
      await this.router.navigate([''], {
        queryParams: {
          userId: user.id,
          header: 1,
          footer: true
        }
      });
    } else {
      this.badPassword = true;
    }
  }
}
