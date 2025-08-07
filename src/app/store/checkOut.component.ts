import { OrderRepository } from './../model/order.repository';
import { Order } from './../model/order.model';
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { NgForm } from '@angular/forms';

// import { FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';

//
@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: OrderRepository, public order: Order) {
    // cart details + form details
  }

  submitOrder(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        //this.submitted = false;
      });
    }
    //
  }
}
