import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCategoriesComponent } from './movie-categories.component';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';
import { MovieComponent } from '../movie/movie.component';
import { ProductsComponent } from '../products/products.component';

describe('MovieCategoriesComponent', () => {
  let component: MovieCategoriesComponent;
  let fixture: ComponentFixture<MovieCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MovieCategoriesComponent,
        MovieComponent,
        ProductsComponent
       ]
    })
    .overrideComponent( MovieCategoriesComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain products', () => {
  //   expect(component.products.length).toBeGreaterThan(0);
  // });
});
