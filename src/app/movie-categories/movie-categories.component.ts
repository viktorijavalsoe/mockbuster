import { Component, OnInit, Input } from '@angular/core';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit {
  @Input() category: IMovieCategories;
  
  products: IProduct[] = [];
  searchResults: IProduct[] = [];
  
  constructor( 
    private service : DataService,
    private route : ActivatedRoute ) 
    {  }

  ngOnInit() {  
    this.route.paramMap
      .subscribe(categoryParams =>{
        let id = +categoryParams.get('id');
        console.log(id);

        this.service.getData()
          .subscribe((data: IProduct[]) => { 
            this.findMovies(data, id);
          } 
        ); 
      });
    };

  findMovies(data: IProduct[], categoryId: number) { 
    this.products = [];
    if(categoryId === 0) {
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
    
    else {
      this.service.getCategories().subscribe(cats => {
        for(let i = 0; i < cats.length; i++) {
          if(cats[i].id === categoryId) {
            this.category = cats[i];
          }
        }
      })

      for (let i = 0; i < data.length; i++){
      
        const product = data[i];
        const productCategories = product.productCategory;
          for (let j = 0; j < productCategories.length; j++){
            
            if (productCategories[j].categoryId == categoryId){
              
              this.products.push(product);
              }
            } 
          }
        }
    }
  }

