import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http"
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.routing.module";
import { CardDetalheComponent } from "../componente/card-detalhe/card-detalhe.component";
import { LibComponentComponent } from "./lib-component/lib-component.component";
import { SharedModule } from "../shared/shared.module";
import Utils from "../shared/models/Util/Utils";

@NgModule({
    declarations:[
        ProdutoDashboardComponent,
        CardDetalheComponent,
        LibComponentComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule,
        HttpClientModule,
        SharedModule


    ],
    exports:[ProdutoDashboardComponent],
    providers:[Utils]
})

export class ProdutoModule{

}
