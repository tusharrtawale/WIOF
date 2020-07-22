import { TestBed } from '@angular/core/testing';

import { AqiWidgetService } from './aqi-widget.service';

describe('AqiWidgetService', () => {
  let service: AqiWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AqiWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
