import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { Router,Routes, RouterModule } from '@angular/router';
import { LibComponentComponent } from './lib-component/lib-component.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

const produtoRouterConfig: Routes = [
    {
        path:'',component:LibComponentComponent,

    },
    {
      path:'editar/:id',component:EditarProdutoComponent
    }
]

@NgModule({

    imports:[
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports:[]

})
export class ProdutoRoutingModule{

}
