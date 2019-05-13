import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';

import { MovieCategoriesComponent } from './movie-categories.component';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { MovieComponent } from '../movie/movie.component';
import { ProductModalComponent } from '../product-modal/product-modal.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './testing/activatedRouteStub';

describe('MovieCategoriesComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id : 6})

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
      declarations: 
      [ 
        MovieCategoriesComponent,
        TestHostComponent,
        MovieComponent,
        ProductModalComponent
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
  })

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
