import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class NewDarkService{
    private isDarkThemeSubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
    public isDarkTheme$:Observable<boolean>=this.isDarkThemeSubject.asObservable();
    public get darkModeEnabled():boolean{
        return this.isDarkThemeSubject.getValue();
    }
 constructor(){
    const storedTheme=localStorage.getItem('darkTheme');
    if(storedTheme){
        this.isDarkThemeSubject.next(storedTheme==='true');
        this.updateDarkMode(storedTheme === 'true')

    }
  
 }   
 private updateDarkMode(enabled:boolean):void{
        if(enabled){
            document.body.classList.add('dark');

        }else{
            document.body.classList.remove('dark')
        }
 }
 public toggleDarkMode():void{
    const currentTheme=this.isDarkThemeSubject.getValue();
    const newTheme=!currentTheme;
    this.isDarkThemeSubject.next(newTheme);
    localStorage.setItem('darkTheme',String(newTheme));
    this.updateDarkMode(newTheme)
 }
}