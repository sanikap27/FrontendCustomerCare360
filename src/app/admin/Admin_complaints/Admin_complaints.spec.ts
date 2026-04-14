import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin_ComplaintsComponent } from './Admin_complaints';

describe('Complaints', () => {
  let component: Admin_ComplaintsComponent;
  let fixture: ComponentFixture<Admin_ComplaintsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin_ComplaintsComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_ComplaintsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
