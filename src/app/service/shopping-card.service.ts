import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  private cartItems : IProduct[] = [];

  constructor() { }

  getCartItems(){
    return this.cartItems;
  }
  
  addToCart(movie: IProduct) {
    if (this.cartItems.includes(movie)){
        return;
      } else {
      this.cartItems.push(movie);   
    }
  }

  removeToCart(movie: IProduct) {
    this.cartItems.splice(this.cartItems.indexOf(movie), 1);
   
  }
}
