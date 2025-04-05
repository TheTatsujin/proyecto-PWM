import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {DropdownComponent} from '../../dropdown/dropdown.component';
import {TicketTableComponent} from '../../ticket-table/ticket-table.component';

@Component({
  selector: 'app-ticket-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    TicketTableComponent
  ],
  templateUrl: './ticket-page.component.html',
  styleUrl: './ticket-page.component.css'
})
export class TicketPageComponent {

}
