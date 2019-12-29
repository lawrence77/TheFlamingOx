import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseMenuComponent } from './license-menu.component';

describe('LicenseMenuComponent', () => {
  let component: LicenseMenuComponent;
  let fixture: ComponentFixture<LicenseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
