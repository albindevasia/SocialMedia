import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
 
})
export class FriendsComponent {
 
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute){
   this.singleProfile()
  }
  public profile:any
  ngOnInit():void{
    this.singleProfile()
  }
   public singleProfile(){
  this.profileApi.getSingle('David').subscribe(res=>{
   this.profile=res;
   this.profile.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture 
    
  })
   }
}
