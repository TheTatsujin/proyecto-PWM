import {Component, inject, Input} from '@angular/core';
import {TicketTableService} from '../../services/ticket-table.service';
import {HttpClientModule} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ticket-table',
  imports: [HttpClientModule],
  templateUrl: './ticket-table.component.html',
  styleUrl: './ticket-table.component.css',
  standalone: true
})
export class TicketTableComponent {
  protected tablePrices: any;
  @Input() currentLocation: string = "";
  key: string = "";
  private subscription: Subscription | undefined;
  ticketTableService = inject(TicketTableService);
  constructor() {
  }

  ngOnInit() {
    this.subscription = this.ticketTableService.getTicketsOf().subscribe(tickets => {
      this.tablePrices = tickets.find(ticket => ticket.Evento === this.currentLocation);
      console.log(this.tablePrices);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
