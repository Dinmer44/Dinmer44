import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllFlightsComponent } from './components/all-flights/all-flights.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WorkersAndJobsComponent } from './workers-and-jobs/workers-and-jobs.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkersComponent } from './components/workers/workers.component';
import { JobsComponent } from './components/jobs/jobs.component'





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AllFlightsComponent,
    OrdersComponent,
    WorkersAndJobsComponent,
    WorkersComponent,
    JobsComponent,
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
