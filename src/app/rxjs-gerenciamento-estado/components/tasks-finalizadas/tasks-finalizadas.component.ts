import { Component, OnInit } from '@angular/core';
import { Observable,map,filter } from 'rxjs';
import { ToDoService } from '../../rxjs-gerenciamento-estado.service';
import { Store } from '../../task';

@Component({
  selector: 'mv-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.scss']
})
export class TasksFinalizadasComponent implements OnInit {
  finalizada$:Observable<any[]> = new Observable()

  constructor(private todoServ:ToDoService,private store:Store){

  }

  ngOnInit(): void {
        //Tasks finalizadas
          this.finalizada$ = this.store.getTodoList().pipe(
            map(todolist => todolist.filter(i => i.task_fin && !i.task_ini))
          )
        }

        toggleItem(eve:any){
          this.todoServ.putTask(eve)
        }

}
