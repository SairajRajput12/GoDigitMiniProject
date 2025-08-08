import { Component } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  errorMessage: any;

  constructor(public repository: OrderRepository, public order: Order) {}

  submitOrder(form: any) {
    this.submitted = true;
    if (form.valid) {
      this.repository
        .saveOrder(this.order)

        .subscribe({
          next: (order) => {
            this.order.clear();
            this.orderSent = true;
            this.submitted = false;
          },

          error: (error) => {
            //Error callback
            console.error('error caught in component');
            this.errorMessage = error;
            console.log(this.errorMessage);
          },
          complete: () => {
            console.error('post operation is done');
          },
        });
    }
  }
}
