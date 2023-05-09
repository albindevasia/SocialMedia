import { Component } from '@angular/core';
import { FriendsService } from '../Services/friends.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',

})
export class AddfriendsComponent {
constructor(private readonly friendsService:FriendsService){}
people:any;
sentFriendRequests:any = {};
ngOnInit():void{
  this.friendsService.getUsers().subscribe((res)=>{
    console.log(res)
    this.people=res;
  })
}
public sendFriend(username:string):void{
  this.friendsService.sendFriendRequest(username).subscribe((res)=>{
    console.log(res)
    this.sentFriendRequests[username]=true;
  })
}
}
