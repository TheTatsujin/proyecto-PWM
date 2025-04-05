import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  Locations: any = ['Arquitectura', 'Telecomunicaciones', 'Empresariales'];
  dropdownForm = new FormGroup({
    eventLocation: new FormControl('', Validators.required)
  });

  get dropDownValue(){
    return this.dropdownForm.controls;
  }

}
