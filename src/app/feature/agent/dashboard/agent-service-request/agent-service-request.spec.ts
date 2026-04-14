import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentServiceRequestComponent } from './agent-service-request';

describe('ServiceRequest', () => {
  let component: AgentServiceRequestComponent;
  let fixture: ComponentFixture<AgentServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentServiceRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentServiceRequestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
