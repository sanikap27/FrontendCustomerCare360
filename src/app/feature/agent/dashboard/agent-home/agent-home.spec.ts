import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentHomeComponent } from './agent-home';

describe('AgentHome', () => {
  let component: AgentHomeComponent;
  let fixture: ComponentFixture<AgentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentHomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
