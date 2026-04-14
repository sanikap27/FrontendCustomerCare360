import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReportsComponent } from './CustomerReports';

describe('Adjustment', () => {
  let component: CustomerReportsComponent;
  let fixture: ComponentFixture<CustomerReportsComponent>; 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerReportsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
