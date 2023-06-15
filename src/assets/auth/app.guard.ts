
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { NotifyService } from 'src/app/shared/notify/service/notify.service';

export const AuthGuard = () =>{
  //

  const currentUserService = Inject(LoginService);
  const router = Inject(Router);
  const notify = Inject(NotifyService);


  let login = window.localStorage.getItem("email")
  let password = window.localStorage.getItem("password")

  if(login == "admin" && password == "admin"){

    return true
  }else{
    return false
  }


}
