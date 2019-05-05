import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as moment from 'moment';
import { IMovieCategories } from '../interfaces/imovie-categories';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories: IMovieCategories[];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getCategories()
    .subscribe((categories: IMovieCategories[]) => {
      this.categories = categories;
    })
  }; 
  
}
