import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { ICartItem } from '../interfaces/icart-item';
import { ShoppingCardService } from '../service/shopping-card.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: IProduct; 
  
  productQuantity = 0;
  total = 0;

  constructor(private shoppingService : ShoppingCardService) { }
  
  ngOnInit() {  
    this.shoppingService.cartItem.subscribe( (data : ICartItem[]) => {
      for (let i = 0; i < data.length; i++){
        let id = this.movie.id;
        if (data[i].product.id === id){
          this.productQuantity = data[i].amount;
        }
      }
    })
  }  

  addMovie(){
    this.shoppingService.addToCard(this.movie);    
  }

  removeMovie(){
    this.shoppingService.removeFromCard(this.movie);    
  }

  modalVisibility: boolean = true;
 
  toggle(){
    this.modalVisibility = !this.modalVisibility;
  }
}
