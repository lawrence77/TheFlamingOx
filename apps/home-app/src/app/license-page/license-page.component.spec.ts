import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LicensePageComponent } from './license-page.component';

describe('LicensePageComponent', () => {
  let component: LicensePageComponent;
  let fixture: ComponentFixture<LicensePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LicensePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the `license-page` component', () => {
    expect(component).toBeTruthy();
  });
});
