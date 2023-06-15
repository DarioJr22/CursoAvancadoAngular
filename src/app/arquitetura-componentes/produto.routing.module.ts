import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { LibComponentComponent } from './lib-component/lib-component.component';
import { EditarProdutoComponent } from './produto-dashboard/editar-produto/editar-produto.component';
import { ProdutoComponent } from './produto-dashboard/produto/produto.component';
import { ProdutoResolve } from './produto-dashboard/services/produto.resolve';

const produtoRouterConfig: Routes = [

  {
    path: '',
    component: ProdutoComponent,
    children:[
      {
        path:'',
        component:ProdutoDashboardComponent},
      {
        path:'editar/:id',
        component:EditarProdutoComponent,
        /* resolve:{produto:ProdutoResolve} */
        data:{
          teste:{
            login:window.localStorage.getItem('email'),
            password:window.localStorage.getItem('password'),
          }
        }
      },
      {
        path:'lib-components',
        component:LibComponentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(produtoRouterConfig)],
  exports: [],
})
export class ProdutoRoutingModule {}
