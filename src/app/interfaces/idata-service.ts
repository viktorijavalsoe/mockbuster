import { Observable } from 'rxjs';
import { IProduct } from './iproduct';
import { IMovieCategories } from './imovie-categories';

export interface IDataService {
  getData(): Observable<IProduct[]> ;
  getCategories(): Observable<IMovieCategories[]> ;
}


