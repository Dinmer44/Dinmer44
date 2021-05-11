import { Injectable } from '@angular/core';
import { order } from '../types/tyeps';

const orders = [{
  destination: "Berlin",
  name: "David",
  quantity: 3
},{
  destination: "Otaba",
  name: "Yeuda",
  quantity: 2
}]

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orders=orders;
  addOrder(order: order){
    this.orders.push(order);
  }
  getAllOrders(){
    return this.orders;
  }

  constructor() { }
}
