import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../Services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',

})
export class UpdateProfileComponent {
profile: any;
constructor(private readonly http:HttpClient,private readonly toastr :ToastrService ,private readonly ProfileApi:ProfileService,private readonly router:Router){}

public updateForm=new FormGroup({

  first_name:new FormControl('',Validators.required),
  last_name:new FormControl('',Validators.required),
  username:new FormControl('',Validators.required),
  about:new FormControl('',Validators.required)
})
ngOnInit():void{
  this.singleProfile()
}
public updateNew(){
  console.log(this.updateForm.value)
  if(this.updateForm.valid){
  this.http.post('https://api-sales-app.josetovar.dev/profile/',this.updateForm.value).subscribe((res)=>{
    if(res){
      console.log(res)
      this.toastr.success('profile updated !')
      this.singleProfile()
      this.router.navigate(['/home/profile/myprofile'])
    }else{
      this.toastr.error('profile not updated')
    }
  })
  }
}
  
public singleProfile(){
  this.ProfileApi.getSingle('David').subscribe(res=>{
   this.profile=res;
   
  })
   }
}
