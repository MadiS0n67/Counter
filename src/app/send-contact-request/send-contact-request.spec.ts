import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendContactRequest } from './send-contact-request';

describe('SendContactRequest', () => {
  let component: SendContactRequest;
  let fixture: ComponentFixture<SendContactRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendContactRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(SendContactRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
