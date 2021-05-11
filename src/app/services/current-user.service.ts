import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUser = {
    name: 'David',
    role: 'admin',
  }

  getCurrentUser() {
    return this.currentUser;
  }

  constructor() { }
}
