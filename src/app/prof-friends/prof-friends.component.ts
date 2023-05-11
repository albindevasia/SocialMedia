import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from '../Services/friends.service';
import { ApiService } from '../Services/friends.profile';

@Component({
  selector: 'app-prof-friends',
  templateUrl: './prof-friends.component.html',

})
export class ProfFriendsComponent {
  username: any;
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute,private readonly friendsService:FriendsService,private readonly apiservice:ApiService){}
  ngOnInit():void{

    this.route.paramMap.subscribe((params)=>{
      this.username=params.get('username')
   
       this.friendsShow(this.username)
      })
  
  }
  friends: any;
  public friendsShow(username:string){
    this.friendsService.viewFriends().subscribe((res:any)=>{
      // console.log(res)
      this.friends=res
    })
   }
}
