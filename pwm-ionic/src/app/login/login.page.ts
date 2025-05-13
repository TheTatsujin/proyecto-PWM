import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { signInWithEmailAndPassword } from "@angular/fire/auth";
import { AuthService } from "../services/auth.service";
import { Auth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  loginForm: FormGroup;
  notFound = false;
  badPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private firebaseAuth: Auth
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  async onFormSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.notFound = false;
    this.badPassword = false;

    try {
      const userCredential = await signInWithEmailAndPassword(this.firebaseAuth, email, password);

      await this.router.navigate(['/tabs/home']);

    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          this.notFound = true;
          break;
        case 'auth/wrong-password':
          this.badPassword = true;
          break;
        case 'auth/invalid-email':
          this.email?.setErrors({ email: true });
          break;
        default:
          console.error('Error al iniciar sesión:', error);
      }
    }
  }
}
