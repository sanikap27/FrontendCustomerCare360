import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestComponent } from './customer-request';

describe('CustomerRequest', () => {
  let component: CustomerRequestComponent;
  let fixture: ComponentFixture<CustomerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRequestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
