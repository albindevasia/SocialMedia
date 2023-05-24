import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import { LoginGuard } from 'src/app/Auth/login.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
 
    children:[
      {
      path:'signup',
      component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
