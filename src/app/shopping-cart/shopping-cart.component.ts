import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../service/shopping-card.service';
import { IProduct } from '../interfaces/iproduct';
import { IOrder } from '../interfaces/iorder';
import { ICartItem } from '../interfaces/icart-item';
import { IOrderRows } from '../iorder-rows';
import * as moment from "moment";
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  constructor (
    private shoppingService: ShoppingCardService, 
    private dataService: DataService ) { }

  shoppingCart: ICartItem[] = [];
  totalPrice: number;
  orderRows: IOrderRows[];
  payment;
  customer;
 
  ngOnInit() {
    this.shoppingCart = this.shoppingService.getCart();
    this.shoppingService.getTotalPrice();
      this.totalPrice = this.shoppingService.totalPrice;
    }

    getFormDetails(formValues: any){  
      const order = this.createOrder(formValues);
      console.log(order);
      this.dataService.sendOrder(order).subscribe();
    } 

    createOrder(formValues): IOrder {
      this.orderRows = this.shoppingService.orderRows;
      console.log(this.totalPrice);
      this.payment = formValues.payment;
      this.customer = formValues.email;

      return {
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

    addMovie(id){
      for(let i = 0; i < this.shoppingCart.length; i++){
        if(this.shoppingCart[i].product.id === id){
          this.shoppingCart[i].amount++;
          this.shoppingService.getTotalPrice();
          this.totalPrice = this.shoppingService.totalPrice;
        }
      }   
    }
  
    removeMovie(id){
      for(let i = 0; i < this.shoppingCart.length; i++){
        if(this.shoppingCart[i].product.id === id){
          if(this.shoppingCart[i].amount === 0){
            console.log(this.shoppingCart[i].amount);
            this.shoppingCart.splice(i, 1);
          }else{
          this.shoppingCart[i].amount--;
          this.shoppingService.getTotalPrice();
          this.totalPrice = this.shoppingService.totalPrice;
          }
        }
      }        
    }
  }
