import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import { CommentService } from '../Services/comment.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs';
import { FriendsService } from '../Services/friends.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  constructor(
    private readonly friendsService:FriendsService,
    private readonly profileApi: ProfileService,
    private readonly route: ActivatedRoute,
    private readonly postService: PostService,
    private readonly commentService: CommentService,
    private http: HttpClient
  ) {
    this.singleProfile('');
  }
  public profile: any;
  ngOnInit(): void {
    this.singleProfile('');
    this.concat()

      const prov=String(('username'));
   this.friendsShow()
    
  }
  friends: any[]=[];
  pots:any[]=[]

  public friendsShow(){
    this.friendsService.viewFriends().subscribe((res:any[])=>{

      this.friends=res
      console.log(res)

      this.friends.forEach(res=>{
        this.postService.getPosts(res.username).subscribe((resp:any[]) => {
          resp.forEach((post:any) => {
            post.first_name = res.first_name;
            post.last_name = res.last_name;
            post.picture = res.picture;
            this.pots.push(post);
          });
          
          // console.log(resp)
          // this.pots=this.pots.concat(resp)
          
          // this.concat()
        console.log(this.pots)
        //  this.commentForm.controls['post_id'].setValue(resp[0].post.id)

        })
       
      })

   
    })
   }
   public concat(){
    for(const friend of this.friends){
      this.postService.getPosts(friend.username).subscribe((posts)=>{
        console.log(posts)
        for(const post of posts){
          const postWithDetails={
            username:friend.username,
            first_name:friend.first_name,
            last_name:friend.last_name,
            // picture:friend.picture
          };
          this.pots.push(postWithDetails)
      
        }
      })
    }
   }
  public singleProfile(username:string) {
    this.profileApi.getSingle(username).subscribe((resy: any) => {
      this.profile = resy;
      this.profile.picture =
        `https://api-sales-app.josetovar.dev/pictures/` + resy.picture;
    });
  }
  public posts!:any ;
  public id!:any

  

  public comm = false;
  public postComment() {
    this.comm = true;
  }

  public commentForm: FormGroup = new FormGroup({
    
    post_id: new FormControl('',Validators.required)
 , 

    content: new FormControl('', Validators.required),
  });

  public commentOnPost(post_id:any): void {
    this.commentForm.controls['post_id'].setValue(post_id);
 
    if (this.commentForm.valid)
      this.commentService
        .commentOnPost(this.commentForm.value)
        .subscribe((Response) => console.log(Response));
 
        
  }
}
