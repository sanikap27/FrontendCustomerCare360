import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCustomerComponent } from './agent-customer';

describe('AgentCustomer', () => {
  let component: AgentCustomerComponent;
  let fixture: ComponentFixture<AgentCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentCustomerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
