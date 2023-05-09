import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import { CommentService } from '../Services/comment.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  constructor(
    private readonly profileApi: ProfileService,
    private readonly route: ActivatedRoute,
    private readonly postService: PostService,
    private readonly commentService: CommentService,
    private http: HttpClient
  ) {
    this.singleProfile();
  }
  public profile: any;
  ngOnInit(): void {
    this.singleProfile();
    this.TimeLine('arifk');
    
  }

  public singleProfile() {
    this.profileApi.getSingle('David').subscribe((res: any) => {
      this.profile = res;
      this.profile.picture =
        `https://api-sales-app.josetovar.dev/pictures/` + res.picture;
    });
  }
  public posts!: any;
  public id!:any
  public TimeLine(username: any) {
    this.postService.getPosts(username).subscribe((res: any) => {
      console.log(res)
      this.posts = res;
    
      // console.log(this.post)
      //  this.post.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
    });
  }
  // public pofs!:any;
  // public TimeLine1(){
  //   this.postService.getPosts('DavidJohn').subscribe((res:any)=>{
  //     console.log(res)
  //     this.pofs=res
  //     // console.log(this.post)
  //     //  this.post.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
  //   })
  // }

  public comm = false;
  public postComment() {
    this.comm = true;
  }

  public commentForm: FormGroup = new FormGroup({
    
    post_id: new FormControl('',Validators.required)
 , 

    content: new FormControl('', Validators.required),
  });

  public commentOnPost(): void {
     this.commentForm.controls['post_id'].setValue(this.posts.post.post_id)
    if (this.commentForm.valid)
      this.commentService
        .commentOnPost(this.commentForm.value)
        .subscribe((Response) => console.log(Response));
 
        
  }
}
