import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthInterceptor } from 'src/app/interceptors/token.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {

  constructor(private readonly router:Router,private readonly http:HttpClient,private readonly toastr:ToastrService){}

  public loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });

public login(){
  const url='https://api-sales-app.josetovar.dev/auth/login'
  if(this.loginForm.valid){
  const body=this.loginForm.value;
  this.http.post(url,body).subscribe((res:any)=>{
    if(res){
      localStorage.setItem(
        'access_token',
        JSON.stringify(res.access_token)
      )
      console.log(res)
      this.toastr.success('Login Successfully ')
      this.router.navigate(['/home'])

    }else{
      this.toastr.error('This email and password not exists')
    }
  })
  
  }
}
public get controls() {
  return this.loginForm.controls;
}
}
