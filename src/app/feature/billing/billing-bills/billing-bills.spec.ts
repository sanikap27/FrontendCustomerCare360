import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingBillsComponent } from './billing-bills';

describe('BillingBills', () => {
  let component: BillingBillsComponent;
  let fixture: ComponentFixture<BillingBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingBillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingBillsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
