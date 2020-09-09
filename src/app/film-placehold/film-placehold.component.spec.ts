import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPlaceholdComponent } from './film-placehold.component';

describe('FilmPlaceholdComponent', () => {
  let component: FilmPlaceholdComponent;
  let fixture: ComponentFixture<FilmPlaceholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPlaceholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPlaceholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
