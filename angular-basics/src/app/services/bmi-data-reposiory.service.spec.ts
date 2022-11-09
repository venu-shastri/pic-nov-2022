import { TestBed } from '@angular/core/testing';

import { BmiDataReposioryService } from './bmi-data-reposiory.service';

describe('BmiDataReposioryService', () => {
  let service: BmiDataReposioryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiDataReposioryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
