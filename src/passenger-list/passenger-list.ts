import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerService } from  '../app/services/passenger.service';
@Component({
  selector: 'app-passenger-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Passageiros</h2>
    <ul>
      <li *ngFor="let p of passengers">
        {{ p.name }} - {{ p.email }}
      </li>
    </ul>
  `
})
export class PassengerListComponent implements OnInit {
  passengers: any[] = [];

  constructor(private passengerService: PassengerService) {}

  ngOnInit() {
    this.passengerService.getAll().subscribe(data => {
      this.passengers = data;
    });
  }
}
