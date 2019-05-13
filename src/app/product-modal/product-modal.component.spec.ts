import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalComponent } from './product-modal.component';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';
import { IProduct } from '../interfaces/iproduct';
import { Component } from '@angular/core';

describe('ProductModalComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
      [ 
        ProductModalComponent,
        TestHostComponent,
      ]
    })

    .overrideComponent( ProductModalComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  })

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  })

  @Component({
    template: '<app-product-modal [class.display_modal]="modalVisibility" [movieInfo]="movie"></app-product-modal>' 
  })
  class TestHostComponent {
    movie: IProduct = {
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
    };
  }
});
