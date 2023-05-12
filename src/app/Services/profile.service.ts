import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
interface IProfile{
first_name:string;
last_name:string;
username:string;
email:string;
birthday:string;
picture:string;
about:string
}
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

public getProfile():Observable<IProfile> {
 return   this.http.get<IProfile>(`https://api-sales-app.josetovar.dev/profile/`).pipe(map((user:any)=>{
    user.picture=`https://api-sales-app.josetovar.dev/pictures/`+user.picture;
    return user;
 }))

}    
}