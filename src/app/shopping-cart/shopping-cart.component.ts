import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../service/shopping-card.service';
import { IProduct } from '../interfaces/iproduct';
import { IOrder } from '../interfaces/iorder';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCardService) { }

  private shoppingCart: IProduct[] = []

  ngOnInit() {
   this.shoppingCart = this.service.getCartItems();
   console.log(this.shoppingCart);
  }


}
