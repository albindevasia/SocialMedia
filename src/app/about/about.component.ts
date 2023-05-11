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
       this.username=params.get('username');

this.singleProfile(this.username)

      })
   
    }
   
    public singleProfile(username:string){
   this.profileApi.getSingle(username).subscribe(res=>{
     this.profile=res;
//  console.log(res)
     
   })
}
}