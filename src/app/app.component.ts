import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  show: number=0
  setShow(value: number){
    this.show = value;
  }
 
  


  
  
  
  
}





