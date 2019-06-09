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
    firstName: ['Viktorija',Validators.required],
    lastName :['Vals',Validators.required],
    email :['viktorija@gmail.com',Validators.required],
    address :['R;rstrandsgata 40a',Validators.required],
    postCode :['113 40',Validators.required],
    city :['Stockholm',Validators.required],
    payment: ['visa']
    });
  
  constructor(private fb : FormBuilder) {  
  }

  /* Getters */

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get address(){
    return this.registerForm.get('address');
  }

  get postCode(){
    return this.registerForm.get('postCode');
  }

  get city(){
    return this.registerForm.get('city');
  }

  ngOnInit() {  }

  submitOrder(){
    this.detailsForm.emit(this.registerForm.value);
  }
  
}

