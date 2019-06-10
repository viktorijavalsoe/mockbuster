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

    removeOrder(id){
      this.service.deleteOrder(id)
        .subscribe(data => {
          this.service.getmyOrder()
          .subscribe((orders) => {
            this.myOrders = orders;
          })
        })
    }
  }
