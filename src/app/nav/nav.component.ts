import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  
})
export class NavComponent {
  constructor(private readonly router:Router){}
 public logOut(){

  const logOt = localStorage.getItem('access_token');

 
  if (logOt) {
    localStorage.removeItem('access_token');
  }

  this.router.navigate(['/login'])
}
}