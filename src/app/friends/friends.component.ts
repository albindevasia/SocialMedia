import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../Services/friends.service';
import { ApiService } from '../Services/friends.profile';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
 
})
export class FriendsComponent {
  username: any;
 
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute,private readonly friendsService:FriendsService,private readonly apiservice:ApiService){
   this.singleProfile()
  }
  public friends:any
  public profile:any
  ngOnInit():void{

    this.singleProfile()
    this.friendsShow()
  }
   public singleProfile(){
  this.profileApi.getSingle('David').subscribe(res=>{
   this.profile=res;
   this.profile.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture 
    
  })
   }
   public friendsShow(){
    this.friendsService.viewFriends().subscribe((res)=>{
      this.friends=res
    })
   }
}
