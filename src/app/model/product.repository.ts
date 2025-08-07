import { RestDataSource } from './rest.datasource';
// CRUD methods (repository)
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  // SRP - CRUD methods

  private products: Product[] = []; // 15 object --- data aware states !
  private categories: any[] = []; // 3 strings --- data aware states !

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string | undefined): Product[] {
    // 'Category 1'
    // predictable !
    return this.products.filter(
      (p) => category == undefined || category == p.category
    );
  }

  getCategories(): any[] {
    // predictable
    return this.categories;
  }
}
