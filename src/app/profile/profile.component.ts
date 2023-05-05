import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
 
})
export class ProfileComponent {
  test='David'
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute){
    this.singleProfile()
  }
  public profile:any
   ngOnInit():void{
  
    
  
   }
  
   public singleProfile(){
  this.profileApi.getSingle('David').subscribe(res=>{
   this.profile=res;
   this.profile.picture=`https://api-sales-app.josetovar.dev/pictures/`+ res.picture
    console.log(this.profile.picture)
  })
   }
}
