import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ReturnButtonComponent} from '../return-button/return-button.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReturnButtonComponent, MatCheckboxModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group( {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
      termConditions: new FormControl('', [Validators.required]),
      receiver: new FormControl('', [Validators.required]),
      notifications: new FormControl('', [Validators.required])
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
  get notifications() { return this.registerForm.get('notification'); }


  onFormSubmit() {
    if (this.password != this.confirm) {
      return;
    }
  }
}
