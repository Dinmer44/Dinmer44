import { Component, OnInit } from '@angular/core';
import { worker } from 'src/app/types/tyeps';
import{WorkersAndJobsService, Worker} from 'src/app/services/workers-and-jobs.service'

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  
workers: Worker[] = []
  
 constructor(private servicewj: WorkersAndJobsService) {
    this.servicewj.getWorkers().subscribe((workers)=>this.workers=workers);
   }

  ngOnInit(): void {
  }

}
