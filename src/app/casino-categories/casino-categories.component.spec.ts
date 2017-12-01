import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoCategoriesComponent } from './casino-categories.component';

describe('CasinoCategoriesComponent', () => {
  let component: CasinoCategoriesComponent;
  let fixture: ComponentFixture<CasinoCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasinoCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
