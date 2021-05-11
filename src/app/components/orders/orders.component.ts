import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';
import { flight, order } from 'src/app/types/tyeps';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  flights:flight[]
  orders:order[]
  name: string=''
  quantity: number=0
  selectedDes: string=''
 
  
  

  constructor(private serviceFlights: FlightsService, private serviceOrders: OrdersService  ) {
    this.flights = this.serviceFlights.getFlights();
    this.orders = this.serviceOrders.getAllOrders();
    
    
   }

  ngOnInit(): void {
  }
  addNewOrder(){
    this.serviceOrders.addOrder({
      destination: this.selectedDes,
      name: this.name,
      quantity: this.quantity
      
      
    })
    
    this.selectedDes=''
    this.name=''
    this.quantity=0
  

  }

}
