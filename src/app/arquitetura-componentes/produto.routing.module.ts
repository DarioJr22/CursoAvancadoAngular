import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { Router,Routes, RouterModule } from '@angular/router';
import { LibComponentComponent } from './lib-component/lib-component.component';

const produtoRouterConfig: Routes = [
    {
        path:'',component:ProdutoDashboardComponent
    },
    {
    path:'lib', component:LibComponentComponent
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
