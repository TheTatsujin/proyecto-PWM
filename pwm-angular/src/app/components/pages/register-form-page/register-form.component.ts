import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ReturnButtonComponent} from '../../return-button/return-button.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register-form-page',
  imports: [CommonModule, ReturnButtonComponent, MatCheckboxModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  userService = inject(UserService);
  authService = inject(AuthService);
  router = inject(Router);
  notEqualPasswordsMessage: boolean = false;
  alreadyRegisteredEmailMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group( {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
      termConditions: new FormControl('', [Validators.required]),
      receiver: new FormControl(false, []),
      notifications: new FormControl(false, []),
      tickets: new FormControl(''),
    });
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get phone() { return this.registerForm.get('phone'); }
  get birthdate() { return this.registerForm.get('birthdate'); }
  get password() { return this.registerForm.get('password'); }
  get confirm() { return this.registerForm.get('confirm'); }
  get termConditions() { return this.registerForm.get('termConditions'); }
  get receiver() { return this.registerForm.get('receiver'); }
  get notifications() { return this.registerForm.get('notifications'); }

  private notEqualPasswords() { this.notEqualPasswordsMessage = true;}

  private emailAlreadyRegistered() {this.alreadyRegisteredEmailMessage = true;}

  async onFormSubmit() {
    this.notEqualPasswordsMessage = false;
    this.alreadyRegisteredEmailMessage = false;

    if (this.registerForm.invalid) {
      this.showTermAcceptanceMessage();
      return;
    }

    try {
      const user = await this.userService.getUserByEmail(this.registerForm.value.email);
      if (user) {
        this.emailAlreadyRegistered();
        return;
      }

      if (this.registerForm.value.password !== this.registerForm.value.confirm) {
        this.notEqualPasswords();
        return;
      }

      const userCredentials = await this.authService.registerUser(this.registerForm.value);
      await this.userService.addUser(this.registerForm.value, userCredentials.user.uid);
      this.authService.authenticate();
      localStorage.setItem('userId', userCredentials.user.uid);
      await this.router.navigate([''], {
        queryParams: {
          header: 1,
          footer: true
        }
      });
    } catch (error) {
      console.error('Error durante el registro:', error);
    }
  }

  private showTermAcceptanceMessage() {
    this.registerForm.markAllAsTouched();
    return;
  }
}
