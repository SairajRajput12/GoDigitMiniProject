import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Event } from './event.model';
import { Order } from './order.model';
import { HttpHeaders } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    // this.baseUrl = '/api/';
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'events');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + 'login', {
        name: user,
        password: pass,
      })
      .pipe(
        map((response) => {
          this.auth_token = response.success ? response.token : null;
          return response.success;
        }),
      );
  }

  saveProduct(product: Event): Observable<Event> {
    return this.http.post<Event>(
      this.baseUrl + 'events',
      product,
      this.getOptions(),
    );
  }

  updateProduct(product: Event): Observable<Event> {
    return this.http.put<Event>(
      `${this.baseUrl}events/${product.id}`,
      product,
      this.getOptions(),
    );
  }

  deleteEvent(id?: number): Observable<Event> {
    return this.http.delete<Event>(
      `${this.baseUrl}events/${id}`,
      this.getOptions(),
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders', this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
