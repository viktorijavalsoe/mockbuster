import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { ShoppingCardService } from '../service/shopping-card.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: IProduct; 
  // @Output() movieInfo= new EventEmitter<IProduct>();

  constructor(private shoppingService : ShoppingCardService) { }

  ngOnInit() {  
  }  

  handleClick(){
    this.shoppingService.addToCart(this.movie);    
  }

  modalVisibility: boolean = true;
 
  toggle(){
    this.modalVisibility = !this.modalVisibility;

  }


}
