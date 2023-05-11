import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/friends.profile';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',

})
export class TimelineComponent {
pvc: any[]=[]
constructor(private readonly apiservice:ApiService, private readonly postService:PostService,private readonly route:ActivatedRoute){}
public comm=false
username:any
ngOnInit(){
   this.route.paramMap.subscribe((params)=>{
   this.username=params.get('username')
   this.apiservice.getProfile(this.username).subscribe((profile:any)=>{
    // console.log(profile)
    this.pvc=profile
   this.postService.getPosts(profile.username).subscribe((resp:any[])=>{
    resp.forEach((post:any)=>{
      post.first_name=profile.first_name;
      post.last_name=profile.last_name;
      post.picture=profile.picture
      
      this.posts.push(post)
    })
   })
   })

})
}
public posts:any[]=[]
// public TimeLine(username:string){
//   this.postService.getPosts(username).subscribe((res:any)=>{

//     console.log(res)
//     this.posts=res
//     // console.log(this.post)
//     //  this.post.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
//   })
// }
}
