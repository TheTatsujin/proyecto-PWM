import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";


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

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private authService: AuthService) {
    this.loginForm = this.formBuilder.group( {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])});
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  async onFormSubmit() {
    if (this.loginForm.invalid) {return;}

    const user = await this.userService.getUserByEmail(this.loginForm.value.email);

    if (!user) {
      this.notFound = true;
      return;
    }

    if (user.password === this.loginForm.value.password) {
      this.authService.authenticate();
      localStorage.setItem('userId', user.id);
      await this.router.navigate([''], {
        queryParams: {
          header: 1,
          footer: true
        }
      });
    } else {
      this.badPassword = true;
    }
  }
}
