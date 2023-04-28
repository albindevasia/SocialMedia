import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './modules/auth/register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'',
    redirectTo:'home',pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import('./modules/auth/login/login.module') .then(m=>m.LoginModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
