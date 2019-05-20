import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/icart-item';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  private cardItem = new Subject<IProduct>();

  cart: ICartItem[] = [];
  totalQuantity: number;

  movieClicked = this.cardItem.asObservable();

  getCart(){
    return this.cart;
  }

  addToCard(movie: IProduct){
    this.cardItem.next(movie);
    let foundMovie = false;
      
        for( let i = 0; i < this.cart.length; i++){
          if(this.cart[i].product.id === movie.id) {
            this.cart[i].amount++;
            foundMovie = true;
            console.log("movie name + " + movie.name + "movie quantity" + this.cart[i].amount);
          }
        }

        if(!foundMovie) {
          this.cart.push({ amount: 1, product: movie});
        }
    }

  getTotal(){
    for( let i = 0; i < this.cart.length; i++){
      this.totalQuantity += this.cart[i].amount;
    }
  }
}
