import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAdjustmentComponent } from './billing-adjustment';

describe('BillingAdjustment', () => {
  let component: BillingAdjustmentComponent;
  let fixture: ComponentFixture<BillingAdjustmentComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingAdjustmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingAdjustmentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
