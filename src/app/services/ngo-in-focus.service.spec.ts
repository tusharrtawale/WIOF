import { TestBed } from '@angular/core/testing';

import { NgoInFocusService } from './ngo-in-focus.service';

describe('NgoInFocusService', () => {
  let service: NgoInFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoInFocusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
