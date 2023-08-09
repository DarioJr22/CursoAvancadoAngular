import { AuthGuard } from './../../assets/auth/app.guard';

import { Inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Inject({
  providedIn:'root'
})

export class LoginService  {

  constructor() { }

  getLogin(email:string,password:string){
    window.localStorage.setItem("email",email)
    window.localStorage.setItem("password ",password)
    return AuthGuard();
  }

}

