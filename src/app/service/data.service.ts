import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct } from '../interfaces/iproduct';
import { IDataService } from '../interfaces/idata-service';
import { IMovieCategories } from '../interfaces/imovie-categories';
import { IOrder } from '../interfaces/iorder';


@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {
  constructor( private http: HttpClient) {  }  

  configURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  categoriesURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';

  orderURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/';
  getOrderURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=28';

  searchURL=' https://medieinstitutet-wie-products.azurewebsites.net/api/search';

  randomURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/random?number=5';



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
  }

  getRandomMovie(): Observable<IProduct[]> {
    return this.http.get<IProduct[]> (this.randomURL)
      .pipe(
        // Retry a failed request up to 3 times.
        retry(3),
        // Then handle error
        catchError(this.handleError)
    );    
  }

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]> (this.getOrderURL)
      .pipe(
        // Retry a failed request up to 3 times.
        retry(3),
        // Then handle error
        catchError(this.handleError)
    );    
  }

  getmyOrder(): Observable<IProduct[]> {
    return this.http.get<IProduct[]> (this.configURL)
      .pipe(
        // Retry a failed request up to 3 times.
        retry(3),
        // Then handle error
        catchError(this.handleError)
    );    
  }

  sendOrder(order: IOrder): Observable<IOrder> {
    // console.log("order service " + order);
    console.log(order);
    return this.http.post<IOrder>(this.orderURL, order)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getCategories(): Observable<IMovieCategories[]> {
    return this.http.get<IMovieCategories[]>(this.categoriesURL);
  }

}

