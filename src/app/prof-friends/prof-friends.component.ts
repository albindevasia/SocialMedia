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

    this.friendsShow()
  
  }
  friends: any;
  public friendsShow(){
    this.friendsService.viewFriends().subscribe((res:any)=>{
      this.friends=res
    })
   }
}
