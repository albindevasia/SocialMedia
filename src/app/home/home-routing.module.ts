import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { PostsComponent } from '../posts/posts.component';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { FriendsComponent } from '../friends/friends.component';
import { ProfFriendsComponent } from '../prof-friends/prof-friends.component';
import { PhotosComponent } from '../photos/photos.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {
      path:'',
      component:PostsComponent
    },
    {
      path:'profile',
      component:ProfileComponent,
      children:[
        {
          path:'about',
          component:AboutComponent
        },
        {
          path:'',
         redirectTo:'about', pathMatch:'full'
        },
        {
          path:'friends',
          component:ProfFriendsComponent
        },
        {
          path:'photos',
          component:PhotosComponent
        }
      ]
    },
  
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
