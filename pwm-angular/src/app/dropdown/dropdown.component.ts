import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  Locations: any = ['Arquitectura', 'Teleco', 'Empresariales'];
  dropdownForm = new FormGroup({
    eventLocation: new FormControl('', Validators.required)
  });

  get dropDownValue(){
    return this.dropdownForm.controls;
  }

}
