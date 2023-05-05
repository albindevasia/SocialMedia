import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ProfFriendsComponent } from './prof-friends/prof-friends.component';
import { PhotosComponent } from './photos/photos.component';
import { NewPostComponent } from './new-post/new-post.component';
import {  AuthInterceptor,  } from './interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
      // PostsComponent,
    FriendsComponent,
      // UpdateProfileComponent,
      // ProfilePictureComponent,
      // ChangeProfileComponent,
    // PhotosComponent,
    // ProfFriendsComponent,
    // AboutComponent,
    //  ProfileComponent,
    // NewPostComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
BrowserAnimationsModule,
   
   ToastrModule.forRoot({
    progressBar:true,
     timeOut:3000,
      positionClass:'toast-top-center',
       closeButton:true,
        preventDuplicates:true}),
  ],
  providers: [
    {provide :HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
