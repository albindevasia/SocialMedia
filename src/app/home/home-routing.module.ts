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
import { NewPostComponent } from '../new-post/new-post.component';

import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { LoginGuard } from '../Auth/login.guard';
import { MycomponentComponent } from '../mycomponent/mycomponent.component';
import { MyphotosComponent } from '../myphotos/myphotos.component';
import { AddfriendsComponent } from '../addfriends/addfriends.component';
import { AcceptComponent } from '../accept/accept.component';


const routes: Routes = [
  {path:'',component:HomeComponent,
 canActivate:[LoginGuard],
 canActivateChild:[LoginGuard],

  children:[
    {
      path:'',
      component:PostsComponent
    },
    {
      path: 'newpost',
      component:NewPostComponent   
    },
    {
      path:'profile/:username',
      component:ProfileComponent,
      children:[
    
        {
          path:'timeline/:username',
          component:TimelineComponent
        },

        {
          path:'picture',
          component:ProfilePictureComponent
        },
        {
          path:'update',
          component:UpdateProfileComponent
        },
        {
          path:'about',
          component:AboutComponent
        },
      
        {
          path:'',
          redirectTo:'about' ,pathMatch:'full'
        },
        {
          path:'friends',
          component:ProfFriendsComponent
        },
        {
          path:'photos',
          component:PhotosComponent,
          children:[
            {
              path:'myphoto',
              component:MyphotosComponent
            }
          ]
        },
        {
          path:'myprofile',
          component:MycomponentComponent
        },
        {
          path:'addfriend',
          component:AddfriendsComponent
        }
 
      ],
    },
  {
    path:'accept',
    component:AcceptComponent
  },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
