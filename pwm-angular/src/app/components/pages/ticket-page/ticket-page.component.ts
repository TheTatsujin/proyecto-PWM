import { Component } from '@angular/core';
import {DropdownComponent} from '../../dropdown/dropdown.component';
import {TicketTableComponent} from '../../ticket-table/ticket-table.component';

@Component({
  selector: 'app-ticket-page',
  standalone: true,
  imports: [
    DropdownComponent,
    TicketTableComponent
  ],
  templateUrl: './ticket-page.component.html',
  styleUrl: './ticket-page.component.css'
})
export class TicketPageComponent {
  defaultLocation = "A";
  defaultChoice = "Arquitectura";


  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('selectedLocation');
      if (saved) {
        this.defaultLocation = saved.substring(0, 1);
        this.defaultChoice = saved
      }
    }
  }

  onChoiceSelected(selectedValue: string) {
    this.defaultLocation = selectedValue.substring(0, 1);
    this.defaultChoice = selectedValue
    localStorage.setItem('selectedLocation', selectedValue);
  }
}
