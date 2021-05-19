import { Component, OnInit } from '@angular/core';
import {WorkersAndJobsService, Job, Worker}from 'src/app/services/workers-and-jobs.service'

interface avg{
  job: Job
  avarage: number
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})


export class JobsComponent implements OnInit {

  jobs: Job[] = []
  workers: Worker[] = []
  avarage: avg[] = []
  
 constructor(private servicewj: WorkersAndJobsService) {
   
   
  }

  ngOnInit(): void {
    this.servicewj.getJobs().subscribe((jobs)=>{this.jobs=jobs;
    this.servicewj.getWorkers().subscribe((workers)=>{
      this.workers=workers; 
      this.jobs.forEach((job) => {
        let count = 0;
        let sum = 0;
        this.workers.forEach(worker => {
          if(worker.jobId==job.id){
            count+=1;
            sum+=worker.salary;
          }


        
          
        });
        if(sum>0){
          let o:avg = {job: job, avarage: sum/count};
          
          this.avarage.push(o);
        }
          

        
      });
      
    });}
      );
    
    
  }
}
