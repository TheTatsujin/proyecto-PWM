import {Component, inject} from '@angular/core';
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
  defaultLocation = 'A';
  key;
  private subscription: Subscription | undefined;
  constructor(private ticketTableService: TicketTableService) {
    this.key = `ticket-table-${this.defaultLocation}`;
  }

  ngOnInit() {
    this.subscription = this.ticketTableService.getTicketsOf(this.defaultLocation).subscribe(data => {
      this.tablePrices = data;
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
