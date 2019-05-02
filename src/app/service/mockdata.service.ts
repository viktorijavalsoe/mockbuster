import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/idata-service';
import { IProduct } from '../interfaces/iproduct';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
import { IMovieCategories } from '../interfaces/imovie-categories';

@Injectable({
  providedIn: 'root'
})
export class MockdataService implements IDataService {
  constructor() { }
  products: IProduct[] = [
    {
      id: 76,
      name: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
      price: 199,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year: 2008,
      added: '2016-01-05T00:00:00',
      productCategory:[
        {
          categoryId: 5,
          category: null},
        { categoryId: 6,
          category: null
        }
      ]
    },
    {
      id: 82,
      name: 'Back to the Future',
      description: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
      price: 99,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,643,1000_AL_.jpg',
      year: 1985,
      added: '2017-06-14T00:00:00',
      productCategory:[
        {
          categoryId: 7, 
          category: null
        },
        {
          categoryId :8,
          category: null
        }
      ]
    },
    {
      id: 78,
      name:"Le fabuleux destin d'Amélie Poulain",
      description:"Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
      price: 100,
      imageUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      year: 2001,
      added:"2017-07-10T00:00:00",
      productCategory:[
        {
          categoryId: 7,
          category: null
        }
      ]
    }
  ];

  categories: IMovieCategories[] = [
    {
      id: 5,
      name: "Action"
    },
    {
      id: 6,
      name: "Thriller"
    },
    {
      id: 7,
      name: "Comedy"
    },
    {
      id: 8,
      name: "Sci-fi"
    }
  ];

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occured. 
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend returned an unsuccessful respons code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(
      'Oopsy, something bad happened. Please try again later'
    );
  };


  getData() : Observable<IProduct[]> {
    return of(this.products).pipe(
      // Retry a failed request up to 3 times.
      retry(3),
      // Then handle error
      catchError(this.handleError)
    ); 
  }

  getCategories(): Observable<IMovieCategories[]> {
    return  of(this.categories).pipe(
      // Retry a failed request up to 3 times.
      retry(3),
      // Then handle error
      catchError(this.handleError)
    )
  };

}
