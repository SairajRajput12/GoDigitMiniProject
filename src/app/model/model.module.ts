import { ConnectionService } from './connection.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { EventRepository } from './event.repository';
import { Book } from './book.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    EventRepository,
    Book,
    Order,
    OrderRepository,
    AuthService,
    ConnectionService,
    RestDataSource,
  ],
})
export class ModelModule {}

// services are called as shared(by nature)
