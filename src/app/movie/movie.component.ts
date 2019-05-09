import { Component, OnInit, Input, Output } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { DataService } from '../service/data.service';
import { ShoppingCardService } from '../service/shopping-card.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: IProduct; 
  // @Input() movieQuantity: number;
  // @Output() add = new EventEmitter <number>();


  constructor( private service: ShoppingCardService) { 
  }

  ngOnInit() {  
  }
  handleClick(movie){
    this.service.addToCart(movie);
  };
   
}
