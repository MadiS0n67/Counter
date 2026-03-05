import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGuesser } from './age-guesser';

describe('AgeGuesser', () => {
  let component: AgeGuesser;
  let fixture: ComponentFixture<AgeGuesser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeGuesser],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeGuesser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
