import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentNavbarComponent } from './agent-navbar';

describe('AgentNavbar', () => {
  let component: AgentNavbarComponent;
  let fixture: ComponentFixture<AgentNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgentNavbarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
