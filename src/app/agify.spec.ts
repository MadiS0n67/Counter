import { TestBed } from '@angular/core/testing';

import { AgifyService } from './agify';

describe('Agify', () => {
  let service: AgifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
