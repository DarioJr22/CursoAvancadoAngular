import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http"
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.routing.module";
import { LibComponentComponent } from "./lib-component/lib-component.component";
import { SharedModule } from "../shared/shared.module";
import Utils from "../shared/models/Util/Utils";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
    declarations:[
        ProdutoDashboardComponent,
        EditarProdutoComponent,
        LibComponentComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule,
        HttpClientModule,
        SharedModule,
        MatCardModule,
        ReactiveFormsModule


    ],
    exports:[ProdutoDashboardComponent],
    providers:[Utils]
})

export class ProdutoModule{

}
