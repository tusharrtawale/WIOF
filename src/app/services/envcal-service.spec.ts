import { TestBed } from '@angular/core/testing';

import { EnvcalService } from './envcal-service';

describe('EnvcalService', () => {
  let service: EnvcalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvcalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
