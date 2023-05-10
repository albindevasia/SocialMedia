import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/friends.profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent {
  username: any;
  pvc:any;
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute,private readonly apiservice:ApiService,private http:HttpClient){
    // this.singleProfile()
   }
   public profile:any
    ngOnInit():void{
   
      this.route.paramMap.subscribe(params=>{
        const prov=String(params.get('username'));
this.http.get(`https://api-sales-app.josetovar.dev/friendships/${prov}`).subscribe((res)=>{
  this.pvc=res
})
this.singleProfile(prov)
      })
   
    }
   
    public singleProfile(username:string){
   this.profileApi.getSingle(username).subscribe(res=>{
    // this.profile=res;
// console.log(res)
     
   })
}
}