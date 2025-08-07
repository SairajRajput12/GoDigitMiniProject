import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    StaticDataSource,
    ProductRepository,
    Cart,
    { provide: StaticDataSource, useClass: RestDataSource },
  ], // register & launch services/injectables
})
export class ModelModule {} // SRP - register & launch services/injectibles
