import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './modules/auth/register/register.component';

const routes: Routes = [
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  {
    path:'',
    redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import('./modules/auth/login/login.module') .then(m=>m.LoginModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./nav/nav.module').then(m=>m.NavModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
