import { Router } from '@angular/router';
import { Book } from '../model/book.model';
import { Event } from '../model/event.model';
import { EventRepository } from '../model/event.repository';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: './events.component.html',
})
export class EventComponent {
  public selectedCategory: string | undefined = undefined; // this state in a component drive UI behaviour.
  public eventsPerPage = 3;
  public selectedPage = 1;

  // when one angular entity is trying to access the another angular entity than it must be delcared as a dependency.
  constructor(
    private repository: EventRepository,
    private cart: Book,
    private router: Router
  ) {}
  get events() {
    // it returns the computed property - not functions.
    // using get in this method this method becomes read only.
    console.log('invokced');
    let pageIndex = (this.selectedPage - 1) * this.eventsPerPage;
    console.log(
      this.repository
        .getEvents(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.eventsPerPage)
    );
    return this.repository
      .getEvents(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.eventsPerPage);
  }

  get categories() {
    // it returns the computed property - not functions.
    // using get in this method this method becomes read only.
    console.log('invokced');
    return this.repository.getCategories();
  }

  execute(category?: string) {
    // Inverse data flow.
    this.selectedCategory = category;
    this.changePage(1);
  }

  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize(newSize: any) {
    this.eventsPerPage = Number(newSize.value);
    this.changePage(1);
  }

  bookEvent(product: Event) {
    console.log(product);
    this.cart.setEvent(product);
    // event causes the state change in the browser url.
  }

  get PageCount(): number[] {
    return Array(
      Math.ceil(
        this.repository.getEvents(this.selectedCategory).length /
          this.eventsPerPage
      )
    )
      .fill(0)
      .map((value, index) => index + 1);

    // we faced error beacuse we are not returning the error and it caused issue in returning the error as the function.
  }
  // this method modifies the state through the event bind.
}

// Find -> What is inverse dataflow ??
// Got -> It occurs from the setters using event binding.
//     -> data flows from the template to the component.

// Autofiring v/s Reexecution
