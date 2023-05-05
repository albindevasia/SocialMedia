import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  constructor(private readonly http:HttpClient ,private readonly profileApi:ProfileService,private readonly router:Router,private readonly toastr:ToastrService){

  }
  ngOnInit():void{
    this.singleProfile()
  }
  selectedFileUrl!: string;
  selectedFile!: File ;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      this.selectedFileUrl = reader.result as string;
    };

    this.selectedFile = file;
    console.log(file)
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      
      if (this.selectedFile.type.startsWith('image/')) {
        formData.append('file', this.selectedFile, this.selectedFile.name);
  console.log(this.selectedFile.name)
        this.http.post('https://api-sales-app.josetovar.dev/profile/picture', formData).subscribe(
          (response) => {
            console.log('Upload successful:', response);
            this.toastr.success('Profile Picture Changed')
            this.singleProfile();
            this.router.navigate(['../home'])
          },
          (error) => {
            console.error('Upload failed:', error);
          }
        );
      } else {
        console.error('Invalid file format. Please select a valid image file.');
      }
    } else {
      console.error('No file selected.');
    }
  }
  public singleProfile(){
    this.profileApi.getSingle('David').subscribe(res=>{
   
  // console.log(res)
      
    })
  }
}
