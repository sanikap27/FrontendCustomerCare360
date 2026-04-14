import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAdjustment } from './agent-adjustment';

describe('AgentAdjustment', () => {
  let component: AgentAdjustment;
  let fixture: ComponentFixture<AgentAdjustment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAdjustment],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentAdjustment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
