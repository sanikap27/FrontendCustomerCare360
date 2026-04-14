import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremisesComponent } from './premise';

describe('Premises', () => {
  let component: PremisesComponent;
  let fixture: ComponentFixture<PremisesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremisesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PremisesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
