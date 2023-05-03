import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './home-routing.module';
import { NavComponent } from '../nav/nav.component';
import { PostsComponent } from '../posts/posts.component';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { FriendsComponent } from '../friends/friends.component';
import { ProfFriendsComponent } from '../prof-friends/prof-friends.component';
import { PhotosComponent } from '../photos/photos.component';


@NgModule({
  declarations: [
    // NavComponent,
    PostsComponent,
    ProfileComponent,
    AboutComponent,
  ProfFriendsComponent,
  PhotosComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class HomeModule { }
