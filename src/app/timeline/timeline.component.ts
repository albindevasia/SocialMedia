import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',

})
export class TimelineComponent {
constructor(private readonly postService:PostService,private readonly route:ActivatedRoute){}
public comm=false
ngOnInit(){
  this.route.paramMap.subscribe((params)=>{
    const prov=String(params.get('username'))
    this.posts=this.postService.getPosts(prov)
    this.TimeLine(prov);
  })

}
public posts!:any;
public TimeLine(username:string){
  this.postService.getPosts(username).subscribe((res:any)=>{
    console.log(res)
    this.posts=res
    // console.log(this.post)
    //  this.post.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
  })
}
}
