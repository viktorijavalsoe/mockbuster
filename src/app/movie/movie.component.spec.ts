import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { IProduct } from '../interfaces/iproduct';
import { MockdataService } from '../service/mockdata.service';
import { Component } from '@angular/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';

describe('MovieComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MovieComponent,
        TestHostComponent,
        ProductModalComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  })

  it('should show movies with corresponding categoryId', () => {
    console.log(testHostComponent.products[0].productCategory);

    let catgories = [];
    for(let i = 0; i < testHostComponent.products[0].productCategory.length; i++) {
      catgories.push(testHostComponent.products[0].productCategory[i].categoryId);
    }
    expect(catgories.indexOf(5)).toBeGreaterThanOrEqual(0);
  })

  it('', () => {
    component.movie = {
        id: 76,
        name: 'The Dark Knight',
        description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
        price: 199,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        year: 2008,
        added: '2016-01-05T00:00:00',
        productCategory:[
          {
            categoryId: 5,
            category: null},
          { categoryId: 6,
            category: null
          }
        ]
      }

    fixture.detectChanges();
  })

  @Component({
    template: '<app-movie *ngFor="let product of products" [movie]="products"> </app-movie>' 
  })
  class TestHostComponent {

    products: IProduct[] = [];
    category = { id: 5, name: "Action"}

    constructor (service : MockdataService ){
   
      service.getData()
        .subscribe((data: IProduct[]) => { 
          for (let i = 0; i < data.length; i++){
            const product = data[i];
            const productCategory = product.productCategory;
              if (productCategory[0].categoryId == this.category.id){
                this.products.push(product);
              } 
            }
          } 
        ); 
      }  
    }
});
