import { TestBed } from '@angular/core/testing';

import { Agify } from './agify';

describe('Agify', () => {
  let service: Agify;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Agify);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
