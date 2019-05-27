import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {
  product: IProduct[];
  displayMovieImg;

  constructor( private service : DataService) { }

  ngOnInit() {
    this.service.getRandomMovie()
      .subscribe((data: IProduct[]) => { 
        this.product = data;
        // console.log(this.product);
        this.displayMovieImg = this.product[0].imageUrl;
    }); 
  }
}

