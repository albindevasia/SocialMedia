import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 
})
export class RegisterComponent {
  constructor(private readonly router:Router){}
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  dates=Array.from({length:31},(_,i)=>i +1)
  years=Array.from({length:100},(_,i)=>new Date().getFullYear()-i)

  public registerForm=new FormGroup({

    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required)
  })
  public get controls(){
    return this.registerForm.controls;
  
    
  
  }
  public register(){
    if(this.registerForm.valid){
    this.router.navigate(['/login']);
  }
}
}
