import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { MovieCategoriesComponent } from '../movie-categories/movie-categories.component';
import { MovieComponent } from '../movie/movie.component';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../movie-categories/testing/activatedRouteStub';
import { Component } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

describe('ProductsComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id : 6})

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
      declarations: [ 
        ProductsComponent,
        MovieCategoriesComponent,
        MovieComponent,
        ProductModalComponent,
        TestHostComponent
       ]
    })
    .overrideComponent( ProductsComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(async() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges(); 
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should show 1 movie if searchtext is "dark"', () => {
    let movieResults: IProduct[] = [];
    for (let i = 0; i < testHostComponent.searchResults.length; i++){
      let product = testHostComponent.searchResults[i];
        if((product.name).includes("Dark")){
          let foundMovie = testHostComponent.searchResults[i];
          console.log(foundMovie);
          movieResults.push(foundMovie);
        }
      }
    expect(movieResults.length).toBe(1);
  });

  @Component({
    template: '<app-movie class="card" *ngFor="let results of searchResults; let i = index" [movie]="results"></app-movie>' 
  })
  class TestHostComponent {
    searchResults: IProduct[];
    
    constructor(private service: MockdataService) { }
    ngOnInit() {
      this.service.getSearchResults()
        .subscribe((searchResults: IProduct[]) => {
          this.searchResults = searchResults;
        });
      }; 
    }

});
