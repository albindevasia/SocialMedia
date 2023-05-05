import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PostService{
    constructor(private readonly http:HttpClient){}
    public postApi:string='https://api-sales-app.josetovar.dev/posts'

    public getPosts(username:string):Observable<any>{
        return this.http.get(`${this.postApi}/${username}`)
    }
}