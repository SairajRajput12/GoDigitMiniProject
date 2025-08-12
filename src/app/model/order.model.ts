import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class Order {
  public id?: number;
  public name?: string;
  public number?: string;
  public status: boolean = false;
  public cart: Book;

  constructor(cart: Book) {
    this.cart = cart;
  }

  clear() {
    this.id = undefined;
    this.name = undefined;
    this.number = undefined;
    this.status = false;
    this.cart.clear(); // Assumes Book class has a clear() method
  }
}
