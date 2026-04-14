import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  Admin_BillsComponent } from './Admin_bill';

describe('Bill', () => {
  let component: Admin_BillsComponent;
  let fixture: ComponentFixture<Admin_BillsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin_BillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_BillsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
