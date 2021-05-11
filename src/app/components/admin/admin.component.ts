import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  flightDestination:string='';
  flightPrice: string='';
  status:boolean=false;

  constructor(private flightsService: FlightsService) { 
    this.status = this.flightsService.userStatus;
  }

  ngOnInit(): void {
  }

  addNewFlight(){
    
    this.flightsService.addFlight({
      destination: this.flightDestination,
      price: this.flightPrice,
      
    })
    

    this.flightDestination='';
    this.flightPrice=''

  }

}
