import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../service/shopping-card.service';
import { IProduct } from '../interfaces/iproduct';
import { IOrder } from '../interfaces/iorder';
import { ICartItem } from '../interfaces/icart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  constructor(private shoppingService: ShoppingCardService) { }
  shoppingCart: ICartItem[] = [];

  ngOnInit() {
    this.shoppingCart = this.shoppingService.getCart();
    }

  }

  
