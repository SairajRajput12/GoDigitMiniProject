import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
// import { StaticDataSource } from './static.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private datasource: RestDataSource) {}
  /*  getOrders(): Order[] {
    return this.orders;
  } */

  saveOrder(order: Order): Observable<Order> {
    return this.datasource.saveOrder(order);
  }
}
