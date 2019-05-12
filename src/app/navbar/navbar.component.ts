import { Component, OnInit } from '@angular/core';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: IMovieCategories[];

  constructor (private service: DataService) { }

  ngOnInit() {
    this.service.getCategories()
    .subscribe((categories: IMovieCategories[]) => {
      this.categories = categories;
    })
  }; 

}
