import { Component } from '@angular/core';
import { FriendsService } from '../Services/friends.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',

})
export class AcceptComponent {
constructor(private readonly friendsService:FriendsService,private readonly http:HttpClient, private readonly toastr:ToastrService){}
request:any
ngOnInit():void{
 this.getFriendRequests();
}
public getFriendRequests(){
  this.friendsService.getRequest().subscribe((res)=>{
    console.log(res)
this.request=res
  })
}
acceptFriendRequest(username: string) {

  const apiUrl = `https://api-sales-app.josetovar.dev/friendships/accept?username=${username}`;
  const body = {  };
  const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
  return this.http.post(apiUrl, body).subscribe((res:any) => {
    this.toastr.success(`Added new friend with username ${username} `)
    this.getFriendRequests();
  });;
}

}
 