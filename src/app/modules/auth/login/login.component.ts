import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {

  constructor(private readonly router:Router){}

  public loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });

public login(){
  if(this.loginForm.valid){
  const body=this.loginForm.value;
  this.router.navigate(['/home'])
  }
}
public get controls() {
  return this.loginForm.controls;
}
}
