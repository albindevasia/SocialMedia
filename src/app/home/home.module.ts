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
import { NewPostComponent } from '../new-post/new-post.component';

import { ProfileService } from '../Services/profile.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from '../interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    // NavComponent,
    PostsComponent,
    ProfileComponent,
    AboutComponent,
  ProfFriendsComponent,
  PhotosComponent,
  NewPostComponent,
  
  ProfilePictureComponent,
  UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
   
   ToastrModule.forRoot({
    progressBar:true,
     timeOut:3000,
      positionClass:'toast-top-center',
       closeButton:true,
        preventDuplicates:true}),
  
    
  ],
  providers:[
    
  ]
})
export class HomeModule { }
