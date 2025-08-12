import { Event } from './../model/event.model';
import { Component } from '@angular/core';
import { EventRepository } from '../model/event.repository';

@Component({
  selector: 'event-table',
  templateUrl: './eventTable.component.html',
})
export class EventTableComponent {
  constructor(private repository: EventRepository) {}

  get Events(): Event[] {
    return this.repository.getEvents(undefined); // undefined is passed for calling the method beacuse the getProducts accept parameter which should be eitehr string or undefined.
  }

  deleteEvent(id?: number) {
    this.repository.deleteEvent(id);
  }
}
