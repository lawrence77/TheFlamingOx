import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeSideNavComponent } from './home-side-nav.component';

describe('HomeSideNavComponent', () => {
  let component: HomeSideNavComponent;
  let fixture: ComponentFixture<HomeSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSideNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
