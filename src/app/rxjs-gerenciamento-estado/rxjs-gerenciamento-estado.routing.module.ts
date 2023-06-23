import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RxjsGerenciamentoEstadoComponent } from "./rxjs-gerenciamento-estado.component";

const pipesRouterConfig = [
  {
    path:'' ,
    component:RxjsGerenciamentoEstadoComponent
  }
];

@NgModule({
imports: [RouterModule.forChild(pipesRouterConfig)],
exports: []
})

export class  RxjsGerenciamentoRoutingModule{

}
