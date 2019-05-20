import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCategoriesComponent } from './movie-categories.component';
import { MovieComponent } from '../movie/movie.component';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './testing/activatedRouteStub';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';


describe('MovieCategoriesComponent', () => {
  let component: MovieCategoriesComponent;
  let fixture: ComponentFixture<MovieCategoriesComponent>;

  let stub = new ActivatedRouteStub({ id: 4 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCategoriesComponent, MovieComponent, ProductModalComponent ],
      imports: [ HttpClientModule ],
      providers: [ { provide: ActivatedRoute, useValue: stub }, { provide: DataService, useClass: MockdataService} ]
    })
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
});