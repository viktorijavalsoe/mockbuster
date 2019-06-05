import { TestBed } from '@angular/core/testing';

import { ShoppingCardService } from './shopping-card.service';
import { MockdataService } from './mockdata.service';

describe('ShoppingCardService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCardService = TestBed.get(ShoppingCardService);
    expect(service).toBeTruthy();
  });

  it ('should add movie to card', () => {
    const service: ShoppingCardService = TestBed.get(ShoppingCardService);
    const data = new MockdataService();
    
    data.getData().subscribe(movies => {
      service.addToCard(movies[0]);
      
      expect(service.cart.length).toBe(1);
    }) 
  });
  

  it ('should increase amount if movie is in the cart', () => {
    const service: ShoppingCardService = TestBed.get(ShoppingCardService);
    
    const data = new MockdataService();

    data.getData().subscribe(movies => {
      service.addToCard(movies[0]);
      service.addToCard(movies[0]);

        for( let i = 0; i < service.cart.length; i++) {
          if(service.cart[i].product.id === movies[0].id) {
          service.cart[i].amount++;
          }
        
        expect(service.cart[0].amount).toBe(3);
        }
      })
  });

  it ('should decrease amount of movie is in the cart', () => {
    const service: ShoppingCardService = TestBed.get(ShoppingCardService);
    
    const data = new MockdataService();
    
    data.getData().subscribe(movies => {

      service.addToCard(movies[0]);
    
      service.removeFromCard(movies[0]);

      expect(service.cart[0].amount).toBe(0);
    }) 
  });

  it('should give total number of movies in the cart', () => {
    const service: ShoppingCardService = TestBed.get(ShoppingCardService);
    
    const data = new MockdataService();
    
    data.getData().subscribe(movies => {
      service.totalQuantity = 0;
      service.addToCard(movies[0]);
      
      for( let i = 0; i < service.cart.length; i++){  
        service.totalQuantity += service.cart[i].amount;
      }
      // expect(service.totalQuantity).toBe(1);
    })

  });

  it('should give total price for all products in the cart', () => {
    const service: ShoppingCardService = TestBed.get(ShoppingCardService);
    
    const data = new MockdataService();
    
    data.getData().subscribe(movies => {
      service.totalPrice = 0;
      service.addToCard(movies[0]);
      service.addToCard(movies[1]);
      
      for( let i = 0; i < service.cart.length; i++){
        let pricePerItem = service.cart[i].product.price;
        let amount = service.cart[i].amount;
        let totalPricePerItem = pricePerItem * amount;
        service.totalPrice += totalPricePerItem;
      }

      expect(service.totalPrice).toBe(298);
    })

  });
});
