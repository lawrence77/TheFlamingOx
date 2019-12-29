import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PageNotFoundPageComponent } from './page-not-found-page.component';

describe('PageNotFoundPageComponent', () => {
  let component: PageNotFoundPageComponent;
  let fixture: ComponentFixture<PageNotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the `page-not-found-page` component', () => {
    expect(component).toBeTruthy();
  });
});
