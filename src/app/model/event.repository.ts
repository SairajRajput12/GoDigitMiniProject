import { Injectable } from '@angular/core';
import { Event } from './event.model';
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from './rest.datasource';

@Injectable()
export class EventRepository {
  private products: Event[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getEvents().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getEvents(category?: string): Event[] {
    return this.products.filter(
      (p) => category == undefined || category == p.category,
    );
  }

  getEvent(id: number): Event | undefined {
    return this.products.find((p) => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Event) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product,
        );
      });
    }
  }

  deleteEvent(id?: number) {
    console.log('changed');
    this.dataSource.deleteEvent(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1,
      );
    });
  }
}
