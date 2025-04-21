import {Component, inject, Input, SimpleChanges} from '@angular/core';
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
  @Input() defaultLocation: string = "";
  key: string = "";
  private subscription: Subscription | undefined;
  constructor(private ticketTableService: TicketTableService) {
  }

  ngOnInit() {
    this.key = `ticket-table-${this.defaultLocation}`;
    this.subscription = this.ticketTableService.getTicketsOf(this.defaultLocation).subscribe(data => {
      this.tablePrices = data;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['defaultLocation']) {
      const cambio = changes['defaultLocation'];
      this.defaultLocation = cambio.currentValue;
      this.subscription?.unsubscribe();
      this.key = `ticket-table-${this.defaultLocation}`;
      this.subscription = this.ticketTableService.getTicketsOf(this.defaultLocation).subscribe(data => {
        this.tablePrices = data;
      })
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
