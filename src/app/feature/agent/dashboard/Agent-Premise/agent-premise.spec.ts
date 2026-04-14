import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPremiseComponent } from './agent-premise';

describe('Premise', () => {
  let component: AgentPremiseComponent;
  let fixture: ComponentFixture<AgentPremiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentPremiseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentPremiseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
