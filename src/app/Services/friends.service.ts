import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor(private readonly http: HttpClient) {}
  public api: string = 'https://api-sales-app.josetovar.dev/users';
  public url: string =
    'https://api-sales-app.josetovar.dev/friendships/send?username=${username}';
public envirment='https://api-sales-app.josetovar.dev'

  public getUsers(): Observable<any> {
    return this.http
      .get(this.api)
      .pipe(
        map((response: any) =>
          response.filter((user: any) => !user.friendships)
        )
      );
  }

  // public sendFriendRequest(username:string):Observable<any>{
  //     return this.http.post(this.url,{});
  // }
  public sendFriendRequest(username: string): Observable<any> {
    let params = new HttpParams();

    params = params.append('username', username);

    return this.http.post(
      `${this.envirment}/friendships/send`,
      {},
      { params }
    );
  }
  public getRequest():Observable<any>{
return this.http.get(`https://api-sales-app.josetovar.dev/friendships/requests`).pipe(map((res:any)=>res.filter((request:any)=>request.status !== 'accepted')))
  }

  public viewFriends():Observable<any>{
    return this.http.get(`https://api-sales-app.josetovar.dev/friendships/`)
  }
  public viewS(username:any):Observable<any>{
    return this.http.get(`https://api-sales-app.josetovar.dev/friendships/`)
  }
}
