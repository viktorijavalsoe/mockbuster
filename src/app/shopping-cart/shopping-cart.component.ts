import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../service/shopping-card.service';
import { IOrder } from '../interfaces/iorder';
import { ICartItem } from '../interfaces/icart-item';
import { IOrderRows } from '../iorder-rows';
import * as moment from "moment";
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  checkoutVisibility: boolean = true;
  checkIfEmpty: boolean = false;

  constructor (
    private shoppingService: ShoppingCardService, 
    private dataService: DataService,
    private router: Router) { }

  shoppingCart: ICartItem[] = [];
  totalPrice: number;
  orderRows: IOrderRows[];
  payment;
  customer;
 
  ngOnInit() {
    this.shoppingCart = this.shoppingService.getCart();
    this.shoppingService.getTotalPrice();
    this.totalPrice = this.shoppingService.totalPrice;
    this.isEmpty(); 
    }

    getFormDetails(formValues: any){  
      const order = this.createOrder(formValues);
      this.dataService.sendOrder(order).subscribe();
      setTimeout(() => {
        this.router.navigate(["order-success"]);
      }, 1500
      );
    } 

    createOrder(formValues): IOrder {
      this.orderRows = this.shoppingService.orderRows;
      console.log(this.totalPrice);
      this.payment = formValues.payment;
      this.customer = formValues.email;

      return {
        id: 0, 
        companyId : 28,
        created : moment()
          .locale("sv")
          .format("YYYY-MM-DDTLTS"),
        createdBy : this.customer,
        payment : this.payment,
        totalPrice : this.totalPrice,
        status: 0,
        orderRows : this.orderRows
      }
    }

    addMovie(product){
      this.shoppingService.addToCard(product);
      this.shoppingService.getTotalPrice();
      this.totalPrice = this.shoppingService.totalPrice; 
      this.isEmpty();  
    }
  
    removeMovie(product){
      this.shoppingService.removeFromCard(product);
      this.shoppingService.getTotalPrice();
      this.totalPrice = this.shoppingService.totalPrice; 
      this.isEmpty();      
    }

    isEmpty(){
      if(this.shoppingCart.length > 0){
        console.log(this.shoppingCart.length);
        this.checkoutVisibility = false;
        this.checkIfEmpty = true;
      }else {
        this.checkoutVisibility = true;
        this.checkIfEmpty = false;
      }
    }
  }
