import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestsComponent } from './service-requests';

describe('ServiceRequests', () => {
  let component: ServiceRequestsComponent;
  let fixture: ComponentFixture<ServiceRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceRequestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceRequestsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
