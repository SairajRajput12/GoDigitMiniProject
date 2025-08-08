import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  // SRP - to support a store template

  public selectedCategory: string | undefined = undefined; // 'Category 3'
  public productsPerPage: number = 4; // 6
  public selectedPage: number = 1; // 1

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router,
  ) {}

  get products() {
    // return computed property - not functions
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage; // 0
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories() {
    // // return computed property - not functions
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.value);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage,
      ),
    )
      .fill(0)
      .map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    //product
    // console.log(product);

    // send details to the cart service
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart'); // Hashbang
  }
}
