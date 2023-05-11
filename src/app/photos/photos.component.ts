import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../Services/profile.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../Services/post.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  
})
export class PhotosComponent {
  profile: any;
  username: any;
constructor(private readonly http:HttpClient,private readonly postService:PostService,private readonly toastr :ToastrService ,private readonly ProfileApi:ProfileService,private readonly router:Router,private readonly route:ActivatedRoute){}
ngOnInit():void{
  this.route.paramMap.subscribe((params)=>{
    this.username=params.get('username')
 
     this.photoView(this.username)
    })
 
}
  public photoView(username:string){
    this.postService.getPosts(username).subscribe(res=>{
     this.profile=res;
     
    })
     }
     showFullScreen(imageUrl: string) {
      this.router.navigate(['../myphoto', { url: imageUrl }]);
    }  
}
