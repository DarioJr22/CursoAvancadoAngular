import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'mv-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
@Input() task:Task[] | null = []
@Input() estado!:string
@Output() toggle:EventEmitter<any> = new EventEmitter<any>();

toggleItem(y:number,action:string){
const taskSelect = this.task![y]
  if(this.estado == 'nIniciado'){
    if(action == 'right'){
        taskSelect.task_fin = false
        taskSelect.task_ini = true
      }
  } else if(this.estado == 'iniciado'){
    if(action == 'right'){
      taskSelect.task_fin = true
      taskSelect.task_ini = false
    } else {
      taskSelect.task_fin = false
      taskSelect.task_ini = false
    }
  } else if(this.estado == 'finalizado'){
    if(action == 'left'){
      taskSelect.task_fin = false
      taskSelect.task_ini = true
    }
  }

  console.log(taskSelect);

  this.toggle.emit(taskSelect)
}

}
