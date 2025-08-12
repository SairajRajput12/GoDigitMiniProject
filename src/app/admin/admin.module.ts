import { BookingsComponent } from './booking.component';
import { AuthComponent } from './authComponent';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EventTableComponent } from './eventTable.component';
import { EventEditorComponent } from './eventEditor.component';

let routing = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main',
    component: AdminComponent,
    children: [
      {
        path: 'events/:x/:y',
        component: EventEditorComponent,
      },
      {
        path: 'events/:x',
        component: EventEditorComponent,
      },
      {
        path: 'events',
        component: EventTableComponent,
      },
      {
        path: 'bookings',
        component: BookingsComponent,
      },
      { path: '**', redirectTo: 'events' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [],
  declarations: [
    AuthComponent,
    AdminComponent,
    EventTableComponent,
    EventEditorComponent,
    BookingsComponent,
  ],
})
export class AdminModule {}
