import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrorHandlerComponent } from './app-error-handler.component';

describe('AppErrorHandlerComponent', () => {
  let component: AppErrorHandlerComponent;
  let fixture: ComponentFixture<AppErrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppErrorHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
