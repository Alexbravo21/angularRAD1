import { TestBed } from '@angular/core/testing';

import { GetcharsService } from './getchars.service';

describe('GetcharsService', () => {
  let service: GetcharsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcharsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
