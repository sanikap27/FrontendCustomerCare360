import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSidebarComponent } from './billing-sidebar';

describe('BillingSidebar', () => {
  let component: BillingSidebarComponent;
  let fixture: ComponentFixture<BillingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingSidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
