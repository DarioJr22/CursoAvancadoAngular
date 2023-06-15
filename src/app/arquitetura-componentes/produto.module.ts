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
import { EditarProdutoComponent } from './produto-dashboard/editar-produto/editar-produto.component';
import { RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto-dashboard/produto/produto.component';
import { NotifyModule } from '../shared/notify/notify.module';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations:[
        ProdutoDashboardComponent,
        LibComponentComponent,
        EditarProdutoComponent,
        ProdutoComponent

    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule,
        HttpClientModule,
        SharedModule,
        MatCardModule,
        ReactiveFormsModule,
        RouterModule,
        NotifyModule,
        MatDialogModule



    ],
    exports:[ProdutoDashboardComponent],
    providers:[Utils]
})

export class ProdutoModule{

}
