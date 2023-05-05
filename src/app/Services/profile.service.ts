import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProfileService{
    constructor(private readonly http:HttpClient){}
    public profileApi:string='https://api-sales-app.josetovar.dev/profile'

public getSingle(username:string):Observable<any>{
return this.http.get(`${this.profileApi}/${username}`)
}
public setProfilePicture(file:FormData):Observable<any>{

     return this.http.post(`https://api-sales-app.josetovar.dev/profile/picture`,file);
    
     }
}