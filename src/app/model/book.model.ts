import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class Book {
  private selectedEvent: Event | null = null;

  setEvent(Product: Event): void {
    this.selectedEvent = Product;
  }

  getEvent(): Event | null {
    return this.selectedEvent;
  }

  clear() {
    this.selectedEvent = null;
  }

  isEmpty(): boolean {
    return (
      this.selectedEvent === null ||
      Object.keys(this.selectedEvent).length === 0
    );
  }
}
