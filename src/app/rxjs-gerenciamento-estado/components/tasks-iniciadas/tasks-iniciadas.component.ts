import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ToDoService } from '../../rxjs-gerenciamento-estado.service';
import { Store } from '../../task';

@Component({
  selector: 'mv-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.scss']
})
export class TasksIniciadasComponent implements OnInit {
  iniciadas$:Observable<any[]> = new Observable()

  constructor(private todoServ:ToDoService,
    private store:Store){
        this.iniciadas$ = this.todoServ.getTask$
  }
  ngOnInit(): void {
    //Tasks finalizadas
      this.iniciadas$ = this.store.getTodoList().pipe(
        map(todolist => todolist.filter(i => i.task_ini))
      )
    }

}
