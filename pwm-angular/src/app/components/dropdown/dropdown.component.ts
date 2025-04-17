import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() defaultChoice: string = "Arquitectura";
  dropdownForm!: FormGroup;
  Locations: any = ['Arquitectura', 'Telecomunicaciones', 'Empresariales'];
  @Output()
  choice = new EventEmitter<string>();

  ngOnInit() {
    this.dropdownForm = new FormGroup({
      eventLocation: new FormControl(this.defaultChoice, Validators.required)
    });
  }

  onChange() {
    const locationChosed = this.dropdownForm.value.eventLocation as string;
    this.choice.emit(locationChosed);
  }
}
