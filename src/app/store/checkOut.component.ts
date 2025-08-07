import { OrderRepository } from './../model/order.repository';
import { Order } from './../model/order.model';
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

// import { FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';

//
@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
})
export class CheckoutComponent {
  orderSent: boolean = false;
  // submitted: boolean = false;
  constructor(public repository: OrderRepository, public order: Order) {
    // cart details + form details
  }

  submitOrder() {
    this.repository
      .saveOrder(this.order)

      .subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        // this.submitted = false;
      });
  }
}
