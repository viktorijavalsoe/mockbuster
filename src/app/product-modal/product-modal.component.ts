import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() movieInfo: IProduct; 

  noDisplay: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
   this.noDisplay = true;
  }

}
