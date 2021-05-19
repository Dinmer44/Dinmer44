import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Worker {
  name: string,
  code: string,
  jobId: string,
  salary: number
  
}
export interface Job {
  id: string,
  description: string


}

@Injectable({
  providedIn: 'root'
})
export class WorkersAndJobsService {

  getWorkers(){
    return this.httpService.get<Worker[]>('/assets/workers.json')

  }
  getJobs(){
    return this.httpService.get<Job[]>('/assets/Jobs.json')
  }

  constructor(private httpService: HttpClient) { }
}
