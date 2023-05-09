import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl ='https://api-sales-app.josetovar.dev'
  public postApi:string='https://api-sales-app.josetovar.dev/posts'
  constructor(private http: HttpClient) { }

  getProfile(username: string) {
    return this.http.get(`${this.apiUrl}/profile/${username}`);
  }

  public viewFriends(username: string):Observable<any>{
    return this.http.get(`https://api-sales-app.josetovar.dev/friendships/${username}`)
  }

//   getPhotos(username: string) {
//     return this.http.get(`${this.apiUrl}/photos/${username}`);
//   }
public getPosts(username:string):Observable<any>{
    return this.http.get(`${this.postApi}/${username}`)
}
  // Add more methods for other API requests as needed
}
