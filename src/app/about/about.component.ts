import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private readonly profileApi:ProfileService,private readonly route:ActivatedRoute){
    this.singleProfile()
   }
   public profile:any
    ngOnInit():void{
   
     
   
    }
   
    public singleProfile(){
   this.profileApi.getSingle('David').subscribe(res=>{
    this.profile=res;
// console.log(res)
     
   })
}
}