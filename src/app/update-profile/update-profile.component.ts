import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {
constructor(private readonly http:HttpClient,private readonly toastr :ToastrService ,private readonly ProfileApi:ProfileService){}

public updateForm=new FormGroup({

  first_name:new FormControl('',Validators.required),
  last_name:new FormControl('',Validators.required),
  username:new FormControl('',Validators.required),
  about:new FormControl('',Validators.required)
})

public updateNew(){
  console.log(this.updateForm.value)
  if(this.updateForm.valid){
  this.http.post('https://api-sales-app.josetovar.dev/profile/',this.updateForm.value).subscribe((res)=>{
    if(res){
      console.log(res)
      this.toastr.success('profile updated !')
      this.singleProfile()
    }else{
      this.toastr.error('profile not updated')
    }
  })
  }
}
  
public singleProfile(){
  this.ProfileApi.getSingle('David').subscribe(res=>{
 
console.log(res)
    
  })
}
}
