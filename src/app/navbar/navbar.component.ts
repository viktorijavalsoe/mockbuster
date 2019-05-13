import { Component, OnInit } from '@angular/core';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: IMovieCategories[];

  constructor (
    private service: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getCategories()
    .subscribe((categories: IMovieCategories[]) => {
      this.categories = categories;
    });

    this.route.queryParamMap
      .subscribe();
  }; 

}
