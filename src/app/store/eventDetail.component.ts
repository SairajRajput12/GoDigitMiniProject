import { ConnectionService } from '../model/connection.service';
import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { Event } from '../model/event.model';

@Component({
  selector: 'cartDetail',
  templateUrl: './eventDetail.component.html',
})
export class CartDetailComponent {
  public connected: boolean = true; // initial state
  public initialObject: Event | null = null;

  constructor(public cart: Book, private connection: ConnectionService) {
    connection.Changes.subscribe((state) => (this.connected = state));
    this.initialObject = this.cart.getEvent();
    console.log(this.initialObject?.image);
    console.log(this.initialObject);
  }

  clearBooking() {
    this.cart.clear();
    this.initialObject = null;
  }
}
