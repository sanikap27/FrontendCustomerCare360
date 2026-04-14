import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  Admin_NotificationsComponent } from './Admin_notifications';


describe('Notifications', () => {
  let component: Admin_NotificationsComponent;
  let fixture: ComponentFixture<Admin_NotificationsComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin_NotificationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_NotificationsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
