import { TestBed } from '@angular/core/testing';

import { WorkersAndJobsService } from './workers-and-jobs.service';

describe('WorkersAndJobsService', () => {
  let service: WorkersAndJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersAndJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
