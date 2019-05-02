import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { DataService } from '../service/data.service';
import * as moment from 'moment';
import { ICategory } from '../interfaces/icategory';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  comedies: IProduct[] = [];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((data: IProduct[]) => { 
        this.products = data; 

        // for (let i = 0; i < this.products.length; i++){
        //   const movie = this.products[i];
        //   if (movie.productCategory[0].categoryId == 7){
        //     console.log(movie.name);
        //     this.comedies.push(movie);
        //   } 
        // }
      } 
    ); 
  }; 
  
}
