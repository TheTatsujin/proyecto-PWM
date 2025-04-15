import { Component } from '@angular/core';
import {DropdownComponent} from '../../dropdown/dropdown.component';
import {TicketTableComponent} from '../../ticket-table/ticket-table.component';

@Component({
  selector: 'app-ticket-page',
  imports: [
    DropdownComponent,
    TicketTableComponent
  ],
  templateUrl: './ticket-page.component.html',
  styleUrl: './ticket-page.component.css'
})
export class TicketPageComponent {
    defaultLocation = "A";
}
