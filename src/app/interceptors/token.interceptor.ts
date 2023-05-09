// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpErrorResponse,
//   HttpEvent,
// } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const access_token = JSON.parse(
//       localStorage.getItem('access_token') || '{}'
//     );

//     if (!request.url.includes('login')) {
//       const authorizedRequest = request.clone({
//         setHeaders: { Authorization: ` ${access_token}` },
//       });

//       return next.handle(authorizedRequest).pipe(catchError(this.handleErrors));
//     }

//     return next.handle(request);
//   }

//   public handleErrors(error: HttpErrorResponse) {
//     switch (error.status) {
//       case 401:
//         return throwError(() => new Error('Not Authorized'));

//       default:
//         return throwError(() => new Error('Error'));
//     }
//   }
// }
import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpRequest,HttpHandler } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const authToken=JSON.parse(localStorage.getItem('access_token')|| '{}'
        
        );

        if(!request.url.includes('login')){
            request=request.clone({
                setHeaders:{
                    Authorization:` ${authToken}`
                }
            })
        }
        return next.handle(request)
    }
}