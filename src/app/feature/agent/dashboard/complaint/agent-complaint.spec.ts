import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentComplaintComponent } from './agent-complaint';

describe('Complaint', () => {
  let component: AgentComplaintComponent;
  let fixture: ComponentFixture<AgentComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentComplaintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentComplaintComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
