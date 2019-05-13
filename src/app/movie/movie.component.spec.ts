import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { IProduct } from '../interfaces/iproduct';
import { MockdataService } from '../service/mockdata.service';
import { Component } from '@angular/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';

describe('MovieComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

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

  @Component({
    template: '<app-movie *ngFor="let product of products" [movie]="products"> </app-movie> ' 
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
