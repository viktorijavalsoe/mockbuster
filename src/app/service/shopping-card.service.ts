import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/icart-item';
import { IOrderRows } from '../interfaces/iorder-rows';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  cart: ICartItem[] = [];
  totalQuantity: 0;
  totalPrice: number;
  orderRows: IOrderRows[] = [];

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
            this.createOrderRows();  
          }
        }
        if(!foundMovie) {
          this.cart.push({ amount: 1, product: movie});
          this.createOrderRows();
          
        }
      this.shoppingCartSource.next(this.cart);
      
    }

    removeFromCard(movie: IProduct){
    
          for( let i = 0; i < this.cart.length; i++){
            if(this.cart[i].product.id === movie.id) {
              this.cart[i].amount--;
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
    for( let i = 0; i < this.cart.length; i++) {
      let pricePerItem = this.cart[i].product.price;
      let amount = this.cart[i].amount;
      let totalPricePerItem = pricePerItem * amount;
      this.totalPrice += totalPricePerItem;
    }
  }

  createOrderRows(): IOrderRows[] {
    console.log(this.cart);
    this.orderRows = [];
    for (let i = 0; i < this.cart.length; i++) {
      this.orderRows.push({ productId: this.cart[i].product.id, amount: this.cart[i].amount });
      }
      console.log(this.orderRows);
      
    return this.orderRows;
  }

}

