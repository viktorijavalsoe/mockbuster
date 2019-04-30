import { Observable } from 'rxjs';
import { IProduct } from './iproduct';

export interface IDataService {
  getData(): Observable<IProduct[]> ;
}
