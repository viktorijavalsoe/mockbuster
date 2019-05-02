import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ProductsComponent } from '../products/products.component';
import { MockdataService } from '../service/mockdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { from } from 'rxjs';
import { DataService } from '../service/data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ 
        HomeComponent,
        ProductsComponent
      ]
    })
    .overrideComponent( ProductsComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
