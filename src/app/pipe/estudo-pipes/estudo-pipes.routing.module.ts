import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EstudoPipesComponent } from "./estudo-pipes.component";



const pipesRouterConfig = [
    {
      path:'' ,
      component:EstudoPipesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(pipesRouterConfig)],
  exports: []
})

export class PipesRoutingModule{

}
