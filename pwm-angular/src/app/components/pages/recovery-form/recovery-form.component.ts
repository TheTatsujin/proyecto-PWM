import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ReturnButtonComponent} from '../../return-button/return-button.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserService} from '../../../services/user.service';

@Component({
  selector: 'app-recovery-form',
  imports: [
    ReturnButtonComponent,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './recovery-form.component.html',
  styleUrl: './recovery-form.component.css'
})
export class RecoveryFormComponent {
  recoveryForm: FormGroup;
  notFound = false;

  userService = inject(UserService);

  constructor(private formBuilder: FormBuilder) {
    this.recoveryForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  get email() {return this.recoveryForm.get('email'); }

  async onFormSubmit() {
    if (this.email?.errors) {return;}

    const user = await this.userService.getUserByEmail(this.recoveryForm.value.email);

    if (!user) {
      this.notFound = true;
      return;
    }

    window.alert("Email sent! Please check your mailbox.");
  }
}
