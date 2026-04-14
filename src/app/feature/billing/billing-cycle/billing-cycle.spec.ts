import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billing_BillingCycleComponent } from './billing-cycle';

describe('BillingCycle', () => {
  let component: Billing_BillingCycleComponent;
  let fixture: ComponentFixture<Billing_BillingCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Billing_BillingCycleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Billing_BillingCycleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
