import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.Component.html',
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
