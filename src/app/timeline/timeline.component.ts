import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',

})
export class TimelineComponent {
constructor(private readonly postService:PostService,private readonly route:ActivatedRoute){}
ngOnInit(){
  this.route.paramMap.subscribe((params)=>{
    const prov=String(params.get('username'))
    this.post=this.postService.getPosts(prov)
  })
  this.TimeLine();
}
public post!:any;
public TimeLine(){
  this.postService.getPosts('David').subscribe((res:any)=>{
    console.log(res)
    this.post=res
    //  this.post.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
  })
}
}
