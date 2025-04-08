import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ReturnButtonComponent} from '../../return-button/return-button.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recovery-form',
  imports: [
    ReturnButtonComponent,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './recovery-form.component.html',
  styleUrl: './recovery-form.component.css'
})
export class RecoveryFormComponent {
  recoveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.recoveryForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  get email() {return this.recoveryForm.get('email'); }

  onFormSubmit() {
    if (this.email?.errors) return;
  }
}
