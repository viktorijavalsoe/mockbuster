import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/idata-service';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

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
    }
  ]

  getData() : Observable<IProduct[]> {
    return of(this.products);

  }

  }

