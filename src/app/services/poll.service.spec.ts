import { TestBed } from '@angular/core/testing';

import { PollQuestionService } from './poll-question.service';

describe('PollService', () => {
  let service: PollQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
