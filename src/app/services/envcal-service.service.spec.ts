import { TestBed } from '@angular/core/testing';

import { EnvcalServiceService } from './envcal-service.service';

describe('EnvcalServiceService', () => {
  let service: EnvcalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvcalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
