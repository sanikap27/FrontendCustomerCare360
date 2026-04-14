import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHomeComponent } from './billinghome';

describe('BillingHome', () => {
  let component: BillingHomeComponent;
  let fixture: ComponentFixture<BillingHomeComponent>;    
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
