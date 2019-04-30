import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { DataService } from '../service/data.service';
import * as moment from 'moment';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((data: IProduct[]) => { 
        this.products = data
    });
  };
  
}
