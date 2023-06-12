import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObsComponent } from './rxjs-obs/rxjs-obs.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  {
    path:'rxjsobsevables',
    component:RxjsObsComponent
  },
  {
    path:'reactiveForms',
    component:ReactiveFormsComponent

  },

  {
    path:'produtos',
    loadChildren:()=> import('./../app/arquitetura-componentes/produto.module')
    .then(x => x.ProdutoModule)
  },
  {
    path:'**',
    component:NotFoundComponentComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
