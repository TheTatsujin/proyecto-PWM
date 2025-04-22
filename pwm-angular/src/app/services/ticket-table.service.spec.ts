import { TestBed } from '@angular/core/testing';

import { TicketTableService } from './ticket-table.service';

describe('TicketTableService', () => {
  let service: TicketTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
