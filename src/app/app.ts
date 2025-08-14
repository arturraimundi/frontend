import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PassengerListComponent } from  '../passenger-list/passenger-list';
@Component({
  selector: 'app-root',
  imports: [PassengerListComponent],
   template: `
    <app-passenger-list></app-passenger-list>
  `
})
export class App {
  protected title = 'frontend';
}
