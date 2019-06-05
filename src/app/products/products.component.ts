import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as moment from 'moment';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { IProduct } from '../interfaces/iproduct';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories: IMovieCategories[];
  searchResults: IProduct[] = [];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getCategories()
    .subscribe((categories: IMovieCategories[]) => {
      this.categories = categories;
    })

    this.service.$searchResult
      .subscribe((searchResults: IProduct[]) => {
        console.log('In movie-category: ', searchResults);
        this.searchResults = searchResults;
      }
    );
  }; 

  
}
