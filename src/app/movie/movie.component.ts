import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: IProduct; 

  constructor() { }

  ngOnInit() {
   
  }




       

}
