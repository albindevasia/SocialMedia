import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../Services/profile.service';
import { Router } from '@angular/router';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  
})
export class PhotosComponent {
  profile: any;
constructor(private readonly http:HttpClient,private readonly postService:PostService,private readonly toastr :ToastrService ,private readonly ProfileApi:ProfileService,private readonly router:Router){}
ngOnInit():void{
  this.singleProfile()
}
  public singleProfile(){
    this.postService.getPosts('David').subscribe(res=>{
     this.profile=res;
     
    })
     }
}
