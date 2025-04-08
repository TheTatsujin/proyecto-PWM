import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-return-button',
    imports: [MatButtonModule],
  templateUrl: './return-button.component.html',
  styleUrl: './return-button.component.css'
})
export class ReturnButtonComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
