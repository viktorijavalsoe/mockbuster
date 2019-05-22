import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/icart-item';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  cart: ICartItem[] = [];
  totalQuantity: number;
  totalPrice: number;

  private shoppingCartSource = new Subject<ICartItem[]>();
  cartItem = this.shoppingCartSource.asObservable();

  getCart(){
    return this.cart;
  }

  addToCard(movie: IProduct){
    let foundMovie = false;
        for( let i = 0; i < this.cart.length; i++){
          if(this.cart[i].product.id === movie.id) {
            this.cart[i].amount++;
            foundMovie = true;
          }
        }
        if(!foundMovie) {
          this.cart.push({ amount: 1, product: movie});
        }
      this.shoppingCartSource.next(this.cart);
    }


    removeFromCard(movie: IProduct){
      let foundMovie = false;
        
          for( let i = 0; i < this.cart.length; i++){
            if(this.cart[i].product.id === movie.id) {
              this.cart[i].amount--;
              foundMovie = true;
            }
          }
        this.shoppingCartSource.next(this.cart);  
    }

  getTotal(){
    this.totalQuantity = 0;
    for( let i = 0; i < this.cart.length; i++){
      this.totalQuantity += this.cart[i].amount;
    }
  }

  getTotalPrice(){
    this.totalPrice = 0;
    for( let i = 0; i < this.cart.length; i++){
      let pricePerItem = this.cart[i].product.price;
      let amount = this.cart[i].amount;
      let totalPricePerItem = pricePerItem * amount;
      this.totalPrice += totalPricePerItem;
    }


  }
}
