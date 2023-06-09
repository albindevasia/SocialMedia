import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginGuard } from './Auth/login.guard';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  // {
  //   path:'',
  //   redirectTo:'login',pathMatch:'full'
  // },
  {
    path:'login',
    loadChildren:()=>import('./modules/auth/login/login.module') .then(m=>m.LoginModule),

  },
  {
    path:'',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule),
    // canActivate:[LoginGuard]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
