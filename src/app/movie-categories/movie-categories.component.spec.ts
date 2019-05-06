import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';

import { MovieCategoriesComponent } from './movie-categories.component';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { MovieComponent } from '../movie/movie.component';

describe('MovieCategoriesComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
      [ 
        MovieCategoriesComponent,
        TestHostComponent,
        MovieComponent
      ]
    })

    .overrideComponent( MovieCategoriesComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should contain categories', () => {
    expect(testHostComponent.categories.length).toBeGreaterThan(0);
  })

  it('should contain  4 categories', () => {
    expect(testHostComponent.categories.length).toBe(4);
  })

  @Component({
    template: '<app-movie-categories *ngFor="let category of categories" [category]="category"></app-movie-categories>' 
  })
  class TestHostComponent {
    categories: IMovieCategories[];

    constructor(private service: MockdataService) { }

    ngOnInit() {
      this.service.getCategories()
        .subscribe((categories: IMovieCategories[]) => {
          this.categories = categories;
        });
      }; 
    }
  });
