import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../service/shopping-card.service';
import { ICartItem } from '../interfaces/icart-item';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private shoppingService: ShoppingCardService) { }
  shoppingCart: ICartItem[] = [];
  totalQuantity = 0;

  ngOnInit() {
    // this.shoppingService.getTotal();
    // this.totalQuantity  = this.shoppingService.totalQuantity;
    // console.log("Quantity is "+this.totalQuantity);
    
  }
  
}
  
