import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObsComponent } from './rxjs-obs/rxjs-obs.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/assets/auth/app.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'rxjsobsevables',
    component:RxjsObsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'reactiveForms',
    component:ReactiveFormsComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'produtos',
    loadChildren:()=> import('./../app/arquitetura-componentes/produto.module')
    .then(x => x.ProdutoModule),
    canActivate:[AuthGuard],
    canMatch:[AuthGuard]
  },
  {
    path:'**',
    component:NotFoundComponentComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
