import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 
})
export class RegisterComponent {
  constructor(private readonly router:Router ,private readonly http:HttpClient){}
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  dates=Array.from({length:31},(_,i)=>i +1)
  years=Array.from({length:100},(_,i)=>new Date().getFullYear()-i)

  public registerForm=new FormGroup({

    first_name:new FormControl('',Validators.required),
    last_name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    birthday:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required)
  })
  public get controls(){
    return this.registerForm.controls;
  
    
  
  }
  public register(){
    console.log(this.registerForm.value)
    const url:string='https://api-sales-app.josetovar.dev/auth/register'
    if(this.registerForm.valid){
      this.http.post(url,this.registerForm.value).subscribe((response=>{
        console.log(response)
        this.router.navigate(['/login']);
      }))
    
  }
}
}
