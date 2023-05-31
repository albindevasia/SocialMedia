import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { DarkThemeService } from 'src/app/Services/dark.service';
import { AuthInterceptor } from 'src/app/interceptors/token.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']

})
export class LoginComponent {

  constructor(private readonly router:Router,private readonly http:HttpClient,private readonly toastr:ToastrService,
 ){}

  public loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });
home:any;
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
      this.router.navigate([''])

    }else{
      this.toastr.error('This email and password not exists')
    }
  })
  
  }
}
public get controls() {
  return this.loginForm.controls;
}
public create(){
  this.router.navigate(['login/signup'])
}

isDarkMode = false;
public toggleDarkMode(event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  this.isDarkMode = checked;
  this.applyDarkMode();
  localStorage.setItem('darkMode', this.isDarkMode.toString());




}
ngOnInit():void{
   const darkModePreference = localStorage.getItem('darkMode');
   this.isDarkMode = darkModePreference === 'true';
   this.applyDarkMode();
}
public applyDarkMode(){
  if (this.isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}



  // setDarkTheme() {
  //   // Logic to determine if the dark theme is selected
  //   const isDarkThemeSelected = true;

  //   // Save the user's preference in localStorage
  //   localStorage.setItem('darkTheme', isDarkThemeSelected.toString());

  //   // Emit the dark theme state change using the service
  //   this.darkThemeService.setDarkTheme(isDarkThemeSelected);
  // }
}

