import { Order } from './../model/order.model';
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'checkout',
  templateUrl: 'checkOut.component.html',
})
export class CheckoutComponent {
  constructor(public order: Order) {}
}
