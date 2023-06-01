import { Component, Inject } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendsService } from '../Services/friends.service';
import { ApiService } from '../Services/friends.profile';
import { NewDarkService } from '../Services/newDark.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
 
})
export class FriendsComponent {
  username: any;
  isDarkMode: any;
 
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute,private readonly friendsService:FriendsService,private readonly apiservice:ApiService,private readonly router:Router,
    @Inject(NewDarkService)private readonly darkService:NewDarkService){
   this.singleProfile()
 
  }
  public friends:any
  public profile:any
  ngOnInit():void{

    this.singleProfile()
    this.friendsShow()
  }
   public singleProfile(){

  this.profileApi.getProfile().subscribe((res)=>{
    this.profile=res
    //  this.profile.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
    //  console.log(res)
  })
   }
   public friendsShow(){
    this.friendsService.viewFriends().subscribe((res)=>{
      this.friends=res
    })
   }
   getNavigateBy(username:string){
    this.router.navigate(['home/profile/friends'],{queryParams:{username:username}})
  
  }

}
