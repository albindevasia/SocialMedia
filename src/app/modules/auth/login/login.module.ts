import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
  ]

})
export class LoginModule { }
