import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { flight } from 'src/app/types/tyeps';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {
  flights:flight[]
  today: number = Date.now();
  

  constructor(private serviceFlights: FlightsService) {
    this.flights = this.serviceFlights.getFlights();
    
   }

  ngOnInit(): void {
  }

}
