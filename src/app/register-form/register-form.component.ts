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
    firstName: ['',[
      Validators.required,
      Validators.minLength(3)
    ]],
    lastName :['',[
      Validators.required,
      Validators.minLength(3)
    ]],
    email :['',[
      Validators.required,
      Validators.email
    ]],
    address :['',Validators.required],
    postCode :['',Validators.required],
    city :['',Validators.required],
    payment: ['', Validators.required]
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

  get payment(){
    return this.registerForm.get('payment');
  }

  ngOnInit() {  }

  submitOrder(){
    this.detailsForm.emit(this.registerForm.value);
  
  }
  
}

