import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { MovieCategoriesComponent } from '../movie-categories/movie-categories.component';
import { MovieComponent } from '../movie/movie.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductsComponent,
        MovieCategoriesComponent,
        MovieComponent
       ]
    })
    .overrideComponent( ProductsComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
