import { ConnectionService } from './../model/connection.service';
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cartDetail',
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  public connected: boolean = true; // initial state

  constructor(public cart: Cart, private connection: ConnectionService) {
    connection.Changes.subscribe((state) => (this.connected = state));
  }
}
