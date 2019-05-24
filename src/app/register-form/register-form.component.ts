import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  @Output() public detailsForm = new EventEmitter<any>();
 
  paymentMethods: string [] = ["Visa", "MasterCard", "Paypal"];
  registerForm = this.fb.group({
      
    firstName: ['',Validators.required],
    lastName :['',Validators.required],
    email :['',Validators.required],
    address :['',Validators.required],
    postCode :['',Validators.required],
    city :['',Validators.required],
    payment: [' ']
    });
  
  
  constructor(private fb : FormBuilder) { 
    
  }

  get firstName(){
    return this.registerForm.get('firstName')
 }

  ngOnInit() {  }

  submitOrder(){
    this.detailsForm.emit(this.registerForm.value);
  }
  
}

