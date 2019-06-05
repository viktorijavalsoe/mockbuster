import { Component, OnInit } from '@angular/core';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../interfaces/iproduct';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchResults = [];
  categories: IMovieCategories[];

  constructor (
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router) {
     }

  ngOnInit() {
    this.service.getCategories()
    .subscribe((categories: IMovieCategories[]) => {
      this.categories = categories;
    });

    this.route.queryParamMap
      .subscribe();   
  }; 

  searchMovies(query: string){
    console.log('Searching: ', query);
    this.service.searchMovies(query).subscribe(searchResult => {
      console.log(searchResult);
      this.service.getSearchResults(searchResult);
    });
  }

}
