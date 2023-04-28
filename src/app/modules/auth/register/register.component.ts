import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 
})
export class RegisterComponent {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  dates=Array.from({length:31},(_,i)=>i +1)
  years=Array.from({length:100},(_,i)=>new Date().getFullYear()-i)
}
