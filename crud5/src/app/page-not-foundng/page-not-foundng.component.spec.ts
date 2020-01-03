import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundngComponent } from './page-not-foundng.component';

describe('PageNotFoundngComponent', () => {
  let component: PageNotFoundngComponent;
  let fixture: ComponentFixture<PageNotFoundngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
