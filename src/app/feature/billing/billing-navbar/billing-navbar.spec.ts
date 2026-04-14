import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingNavbarComponent } from './billing-navbar';

describe('BillingNavbar', () => {
  let component: BillingNavbarComponent;
  let fixture: ComponentFixture<BillingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
