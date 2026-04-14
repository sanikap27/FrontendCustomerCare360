import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSidebarComponent } from './agent-sidebar';

describe('AgentSidebar', () => {
  let component: AgentSidebarComponent;
  let fixture: ComponentFixture<AgentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentSidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
