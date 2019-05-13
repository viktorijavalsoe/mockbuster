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

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const activatedRouteStub = new ActivatedRouteStub({ id : 6})

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
      declarations: [ 
        ProductsComponent,
        MovieCategoriesComponent,
        MovieComponent,
        ProductModalComponent
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
