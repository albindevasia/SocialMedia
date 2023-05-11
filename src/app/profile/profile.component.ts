import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../Services/friends.profile';
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
  pvc:any;
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute,private readonly apiservice:ApiService){
 
  }
  public profile:any
  ngOnInit():void{
    this.route.paramMap.subscribe(params=>{
      this.username=params.get('username');
this.apiservice.getProfile(this.username).subscribe((profile:any)=>{
 
  this.pvc=profile
  this.pvc.picture=`https://api-sales-app.josetovar.dev/pictures/`+ profile.picture
})
    })
   
  }
  
  

 
 public parmsMap(params:{[source:string]:string}){
  if(params['username']){
    this.apiservice.getProfile((params['username'])).subscribe((ptc:any) =>{
      this.pro=ptc
    })
  }
 }
}
