import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { IOrder } from '../interfaces/iorder';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private service : DataService) { }
  myOrders : IOrder[];


  ngOnInit() {
    this.service.getmyOrder()
      .subscribe(( orders: IOrder[]) => {
        this.myOrders = orders;
        })
    }

    removeOrder(order: IOrder){
      for(let i = 0; i < this.myOrders.length; i++) {
        const order = this.myOrders[i];
        if (order.companyId === order.companyId){
          this.myOrders.splice(i, 1);
        }
      }
    }
  }
