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

  //
  orderURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';

  searchURL=' https://medieinstitutet-wie-products.azurewebsites.net/api/search';

  postURL= 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';

  // shoppingCart:IProduct[] = [];

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

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]> (this.configURL)
      .pipe(
        // Retry a failed request up to 3 times.
        retry(3),
        // Then handle error
        catchError(this.handleError)
    );    
  }

  sendOrder(order: IOrder): Observable<IOrder> {
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

  createOrder(order): Observable<IOrder[]>{
    return this.http.post<IOrder[]>(this.orderURL, order);
  }

}

