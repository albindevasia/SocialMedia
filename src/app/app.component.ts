import { Component, Inject, OnInit } from '@angular/core';
import { NewDarkService } from './Services/newDark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent implements OnInit{
  constructor(@Inject(NewDarkService)private readonly darkService:NewDarkService){}
  title = 'socialmedia';
   isDarkMode = false;
  // ngOnInit():void{
  //   const darkModePreference = localStorage.getItem('darkMode');
  //   this.isDarkMode = darkModePreference === 'true';
  //    this.applyDarkMode();
  // }
  // public applyDarkMode(){
  //   if (this.isDarkMode) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  // }
  ngOnInit():void{
this.isDarkMode=this.darkService.darkModeEnabled;
this.darkService.isDarkTheme$.subscribe((isDarkTheme)=>{
  this.isDarkMode=isDarkTheme;
})
  }

}
