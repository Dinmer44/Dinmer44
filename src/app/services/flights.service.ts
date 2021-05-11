import { Injectable } from '@angular/core';
import { flight } from '../types/tyeps';
import { CurrentUserService } from './current-user.service';

const flights = [{
  destination: "Berlin",
  price: "100"
},{
  destination: "Otaba",
  price: "200"
},{
  destination: "Vina",
  price: "300"
},{
  destination: "Ben-Gurion",
  price: "80"
},{
  destination: "Lithuania",
  price: "100"
}
]


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private flights = flights
  public userStatus:boolean = false;

  getFlights(){
    return this.flights;
  }
  addFlight(flight: flight){
    if(this.currentUserService.getCurrentUser().role==="agent")
      this.flights.push(flight)
    

  }
  constructor(private currentUserService: CurrentUserService) {
    this.userStatus=this.currentUserService.getCurrentUser().role==="admin";
   }
}
