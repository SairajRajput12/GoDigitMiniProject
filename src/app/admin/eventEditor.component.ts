import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Event } from '../model/event.model';
import { EventRepository } from '../model/event.repository';

@Component({
  selector: 'event-editor',
  templateUrl: './eventEditor.component.html',
})
export class EventEditorComponent {
  editing: boolean = false;
  event: Event = new Event(); // stores info for 1st record

  constructor(
    private repository: EventRepository,
    private router: Router,
    activeRoute: ActivatedRoute,
  ) {
    console.log('Initialisation');
    this.editing =
      activeRoute.snapshot.params['x'] == 'edit'; // true
    console.log(this.editing);
    if (this.editing) {
      // true
      // true
      Object.assign(
        // ES5 method
        this.event,
        repository.getEvent(
          activeRoute.snapshot.params['y'],
        ),
      );
      console.log(this.event);
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.event);
    this.router.navigateByUrl('/admin/main/events');
  }
}
