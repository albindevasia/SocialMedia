import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthentificationClassService {
    constructor(private readonly http:HttpClient){}

    public isAuthorized():Observable<any>{
        if(localStorage.getItem('access_token'))
        return of('true');
        return of('false');
    }
}