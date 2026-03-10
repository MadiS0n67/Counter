import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGuesserComponent } from './age-guesser';

describe('AgeGuesserComponent', () => {
  let component: AgeGuesserComponent;
  let fixture: ComponentFixture<AgeGuesserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeGuesserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgeGuesserComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
