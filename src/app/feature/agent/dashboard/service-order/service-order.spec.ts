import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentServiceOrderComponent } from './agent-service-order';

describe('ServiceOrder', () => {
  let component: AgentServiceOrderComponent;
  let fixture: ComponentFixture<AgentServiceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentServiceOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentServiceOrderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
