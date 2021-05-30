import { TestBed } from '@angular/core/testing';

import { InFocusService } from './in-focus.service';

describe('InFocusService', () => {
  let service: InFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InFocusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
