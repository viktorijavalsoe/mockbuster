import { Component, OnInit, Input } from '@angular/core';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit {
  @Input() category:IMovieCategories;

  products: IProduct[] = [];

  constructor( private service : DataService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((data: IProduct[]) => { 
        for (let i = 0; i < data.length; i++){
          const product = data[i];
          const productCategory = data[i].productCategory;
          // console.log(productCategory)
            if (productCategory[0].categoryId == this.category.id){
              // console.log(product.name + " " + this.category.name);
            this.products.push(product);
         } 
       }
      } 
    ); 
  };
}
