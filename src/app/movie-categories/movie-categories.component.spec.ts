import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';

import { MovieCategoriesComponent } from './movie-categories.component';
import { IProduct } from '../interfaces/iproduct';

// @Component({
//   template: `<app-movie *ngFor="let product of products" [movie]="product"> </app-movie>`
// })

// class TestHostComponent {
//   movie: IProduct =  {
//     id: 76,
//     name: 'The Dark Knight',
//     description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
//     price: 199,
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
//     year: 2008,
//     added: '2016-01-05T00:00:00',
//     productCategory:[
//       {
//         categoryId: 5,
//         category: null},
//       { categoryId: 6,
//         category: null
//       }
//     ]
//   }
// }

describe('MovieCategoriesComponent', () => {
  let component: MovieCategoriesComponent;
  let fixture: ComponentFixture<MovieCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
      [ 
        MovieCategoriesComponent,
        // TestHostComponent
      ]
    })
    .overrideComponent( MovieCategoriesComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(TestHostComponent);
    // testHost = fixture.componentInstance;
    // categoryEl   = fixture.nativeElement.querySelector('.category');
    fixture = TestBed.createComponent(MovieCategoriesComponent);
    component = fixture.componentInstance;

    // find the hero's DebugElement and element
    // let categoryDebugElement  = fixture.debugElement.query(By.css('.category'));
    // let categoryElement = categoryDebugElement.nativeElement;

    // let expectedCategory = {id: 5, name: 'action' };

    // component.category = expectedCategory;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display category name', () => { 
  //   expect(this.categoryElement).toContain(this.expectedCategory.name) 
  // });


});
