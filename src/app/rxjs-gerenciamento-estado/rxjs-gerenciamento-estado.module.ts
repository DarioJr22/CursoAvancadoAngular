import { NgModule } from "@angular/core";
import { RxjsGerenciamentoEstadoComponent } from "./rxjs-gerenciamento-estado.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";


@NgModule({
  declarations:[RxjsGerenciamentoEstadoComponent,
  TasksComponent,
  TodoListComponent,
  TasksIniciadasComponent,
  TasksFinalizadasComponent],
  imports:[],
})

export class RxjsGerenciamentoModule{

}
