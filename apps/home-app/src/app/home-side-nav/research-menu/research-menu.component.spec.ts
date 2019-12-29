import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchMenuComponent } from './research-menu.component';

describe('ResearchMenuComponent', () => {
  let component: ResearchMenuComponent;
  let fixture: ComponentFixture<ResearchMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
