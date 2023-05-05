import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',

})
export class PostsComponent {
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute){}
  public profile:any
   ngOnInit():void{
  
    this.singleProfile()
  
   }
  
   public singleProfile(){
  this.profileApi.getSingle('David').subscribe(res=>{
    console.log(res)
    
  })
   }
}
