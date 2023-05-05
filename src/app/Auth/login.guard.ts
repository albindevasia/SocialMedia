import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,  CanActivateChildFn,  CanActivateFn,  Router, RouterStateSnapshot } from "@angular/router";
import { AuthentificationClassService } from "./authentification.service";

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate,CanActivateChild{
    constructor(private readonly authentification:AuthentificationClassService,
        private readonly router:Router){}

        public getAuth(){
            this.authentification.isAuthorized().subscribe((response)=>{
                if(response=='false')
                {
                    this.router.navigate(['/login'])
                    return false
                }else return true
            })

           
            }
             canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any{
                this.getAuth
        }
          canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
    this.getAuth();
  }
    }