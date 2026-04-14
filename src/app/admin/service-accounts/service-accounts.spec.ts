import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAccountsComponent } from './service-accounts';

describe('ServiceAccounts', () => {
  let component: ServiceAccountsComponent;
  let fixture: ComponentFixture<ServiceAccountsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceAccountsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceAccountsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
