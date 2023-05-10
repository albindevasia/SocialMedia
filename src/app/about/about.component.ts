import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../Services/friends.profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent {
  username: any;
  pvc:any;
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute,private readonly apiservice:ApiService){
    this.singleProfile()
   }
   public profile:any
    ngOnInit():void{
   
      this.route.paramMap.subscribe(params=>{
        this.username=params.get('username');
  this.apiservice.getProfile(this.username).subscribe((profile:any)=>{
    this.pvc=profile
    // this.pvc.picture=`https://api-sales-app.josetovar.dev/pictures/`+ profile.picture
  })
      })
   
    }
   
    public singleProfile(){
   this.profileApi.getSingle('David').subscribe(res=>{
    this.profile=res;
// console.log(res)
     
   })
}
}