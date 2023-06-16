
import { Inject, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { NotifyService } from 'src/app/shared/notify/service/notify.service';
//PendÊncias:
/*
  - Implementar o guard de autenticação;
  - Entender como injetar os serviços e utilizar os métodos de autenticação.


*/

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


export const canDeactive = (dialogSev:MatDialog) =>{

  /* const dialog = Inject(MatDialog);
  dialog.open(DialogComponent,{
    data:{
          title:'Atenção',
          content:'Deseja realmente excluir este produto'
        }
      }
    ) */
 /*  dialog.open(DialogComponent)
  dialogSev.open(DialogComponent)*/
/*   dialog.afterClosed().subscribe((result:any) =>{
  return result
  }) */
}



