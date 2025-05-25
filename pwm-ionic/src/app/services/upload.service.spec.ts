import { TestBed } from '@angular/core/testing';

import { UploadImageService } from './upload.service';

describe('UploadService', () => {
  let service: UploadImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
