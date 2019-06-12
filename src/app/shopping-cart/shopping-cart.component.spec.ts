import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteStub } from '../movie-categories/testing/activatedRouteStub';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 


describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  const activatedRouteStub = new ActivatedRouteStub({id: 2});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
        ],
        providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub}],
        declarations: [ 
        ShoppingCartComponent,
        RegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
