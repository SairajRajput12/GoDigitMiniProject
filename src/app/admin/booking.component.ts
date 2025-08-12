import { Book } from './../model/book.model';
import { Order } from './../model/order.model';
import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';

@Component({
  selector: 'bookingTableComponent',
  templateUrl: './booking.component.html',
})
export class BookingsComponent {
  includeShipped = false;
  bookings: Order[] = [];

  constructor(private repository: OrderRepository) {
    this.bookings = this.getOrders();
    console.log(this.bookings);
  }

  getOrders(): any[] {
    return this.repository.getOrders();
  }
}
