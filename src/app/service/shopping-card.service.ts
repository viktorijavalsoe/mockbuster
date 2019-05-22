import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/icart-item';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  private shoppingCartSource = new Subject<ICartItem[]>();
  cartItem = this.shoppingCartSource.asObservable();

  cart: ICartItem[] = [];
  totalQuantity: number = 0;

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
    for( let i = 0; i < this.cart.length; i++){
      this.totalQuantity += this.cart[i].amount;
   
    }
  }
}
