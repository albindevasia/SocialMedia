import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
interface IProfile{
  first_name:string;
  last_name:string;
  username: string;
  email:string;
  birthday:string;
  picture:string;
  about:string
  }
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
 
})
export class ProfileComponent {
  test='David'
  username!: any;
  pro!:IProfile
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
    // console.log(this.profile.picture)
  })
   }
 

}
