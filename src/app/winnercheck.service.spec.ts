import { TestBed } from '@angular/core/testing';

import { WinnercheckService } from './winnercheck.service';

describe('WinnercheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinnercheckService = TestBed.get(WinnercheckService);
    expect(service).toBeTruthy();
  });
});
