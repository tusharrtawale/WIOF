import { TestBed } from '@angular/core/testing';

import { CourseInFocusService } from './course-in-focus.service';

describe('CourseInFocusService', () => {
  let service: CourseInFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInFocusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
