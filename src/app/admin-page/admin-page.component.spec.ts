import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPageComponent } from './admin-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { MockdataService } from '../service/mockdata.service';
import { IOrder } from '../interfaces/iorder';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { DataService } from '../service/data.service';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
      [ 
        AdminPageComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })

    .overrideComponent( AdminPageComponent, { set: { providers: [ { provide: DataService, useClass: MockdataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove and order with matching id', () => {
    expect(component.myOrders.length).toBe(2);
      let id = 123;
      component.removeOrder(id);
      console.log(id);
      // expect(component.myOrders.length).toBe(1);

  });
});
