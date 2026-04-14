import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCyclesComponent } from './billing-cycles';

describe('BillingCycles', () => {
  let component: BillingCyclesComponent;
  let fixture: ComponentFixture<BillingCyclesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingCyclesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingCyclesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
