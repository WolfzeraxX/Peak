import { TestBed } from '@angular/core/testing';

import { ApiCalcService } from './api-calc.service';

describe('ApiCalcService', () => {
  let service: ApiCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
