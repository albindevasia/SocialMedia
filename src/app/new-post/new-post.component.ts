import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',

})


// ...



export class NewPostComponent {
  constructor(private readonly http:HttpClient,private readonly profileApi:ProfileService,private readonly router:Router,private readonly toastr:ToastrService){}
  imageSrc!: string;
  caption!: string;
  selectedFile!: File ;
  @ViewChild('captionInput') captionInput!: ElementRef;

  onFileSelected(event:any) {
    const file:File = event.target.files[0];

    if (file) {
     
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
        console.log(file)
        this.selectedFile = file;
      };
    }
  }

public  onUpload() {
  
    this.caption = this.captionInput.nativeElement.value;

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('content', this.caption);
console.log(this.caption)

    this.http.post('https://api-sales-app.josetovar.dev/posts/', formData).subscribe(
      (response) => {
        this.toastr.success('Created New Post')
        this.singleProfile();
        this.router.navigate(['./home'])
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  // Helper function to convert data URI to Blob
  // dataURItoBlob(dataURI: string) {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  //   const ab = new ArrayBuffer(byteString.length);
  //   const ia = new Uint8Array(ab);
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([ab], { type: mimeString });
  // }
  public singleProfile(){
    this.profileApi.getProfile().subscribe((res)=>{
   
  // console.log(res)
      
    })
  }
}
