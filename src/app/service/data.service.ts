import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import { IDataService } from '../interfaces/idata-service';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor( private http: HttpClient) {  }  
  configURL = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]> (this.configURL);     
  }
}
