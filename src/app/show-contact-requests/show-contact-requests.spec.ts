import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactRequests } from './show-contact-requests';

describe('ShowContactRequests', () => {
  let component: ShowContactRequests;
  let fixture: ComponentFixture<ShowContactRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowContactRequests],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowContactRequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
