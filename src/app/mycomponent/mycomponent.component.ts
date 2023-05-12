import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',

})
export class MycomponentComponent {

  profile: any;
  constructor(private readonly http:HttpClient,private readonly toastr :ToastrService ,private readonly ProfileApi:ProfileService){}
  public singleProfile(){
    this.ProfileApi.getProfile().subscribe(res=>{
     this.profile=res;
     
    })
     }
     ngOnInit(){
      this.singleProfile()
     }
}
