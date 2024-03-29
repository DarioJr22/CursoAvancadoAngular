import { NgModule } from "@angular/core";
import { RxjsGerenciamentoEstadoComponent } from "./rxjs-gerenciamento-estado.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { RxjsGerenciamentoRoutingModule } from "./rxjs-gerenciamento-estado.routing.module";
import { ToDoService } from "./rxjs-gerenciamento-estado.service";
import { SharedModule } from "primeng/api";
import { AsyncPipe, CommonModule } from "@angular/common";
import { Store } from "./task";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { NotifyModule } from "../shared/notify/notify.module";
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations:[
    RxjsGerenciamentoEstadoComponent,
  TasksComponent,
  TodoListComponent,
  TasksIniciadasComponent,
  TasksFinalizadasComponent],
  imports:[
    RxjsGerenciamentoRoutingModule,
    SharedModule,
    AsyncPipe,
    CommonModule,
    MatIconModule,
    NotifyModule,
    MatCardModule
  ],
  providers:[
    ToDoService,
    Store
  ]
})

export class RxjsGerenciamentoModule{

}
