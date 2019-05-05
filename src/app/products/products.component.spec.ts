import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { DataService } from '../service/data.service';
import { MockdataService } from '../service/mockdata.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .overrideComponent( ProductsComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain categories', () => {
  //   expect(component.categories.length).toBeGreaterThan(0);
  // })

  // it('should contain  4 categories', () => {
  //   expect(component.categories.length).toBe(4);
  // })

  // it('should add product to cart', () => {
  //   component.addToCart(product: IProduct);

  //   component.cartItems.length 
  // });
});
