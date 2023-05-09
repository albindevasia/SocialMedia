import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService{
    constructor(private http:HttpClient){}

    public commentOnPost(body:{post_id:string, content:string}):Observable<any>{

         return this.http.post(`https://api-sales-app.josetovar.dev/comments/`,body);
        
        }
}