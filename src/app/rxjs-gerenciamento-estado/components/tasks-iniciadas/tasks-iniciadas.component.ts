import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from '../../rxjs-gerenciamento-estado.service';

@Component({
  selector: 'mv-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.scss']
})
export class TasksIniciadasComponent {
  iniciadas$:Observable<any[]> = new Observable()

  constructor(private todoServ:ToDoService){
        this.iniciadas$ = this.todoServ.getTask$
  }
}
