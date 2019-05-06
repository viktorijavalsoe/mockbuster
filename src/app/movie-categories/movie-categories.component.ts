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
  @Input() category: IMovieCategories;

  products: IProduct[] = [];
  
  constructor( private service : DataService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe((data: IProduct[]) => { 
        this.findMovies(data);
      } 
    ); 
  };

  findMovies(data: IProduct[]) { 
    for (let i = 0; i < data.length; i++){
      
      const product = data[i];
      const productCategories = product.productCategory;
        for (let j = 0; j < productCategories.length; j++){
          
          if (productCategories[j].categoryId == this.category.id){
            
            this.products.push(product);
            }
          } 
        }
      }
    };

