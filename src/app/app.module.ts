import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllFlightsComponent } from './components/all-flights/all-flights.component';
import { OrdersComponent } from './components/orders/orders.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AllFlightsComponent,
    OrdersComponent,
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
