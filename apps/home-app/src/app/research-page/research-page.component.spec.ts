import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ResearchPageComponent } from './research-page.component';

describe('ResearchPageComponent', () => {
  let component: ResearchPageComponent;
  let fixture: ComponentFixture<ResearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the `research-page` component', () => {
    expect(component).toBeTruthy();
  });
});
