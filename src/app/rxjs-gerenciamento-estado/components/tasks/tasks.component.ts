import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../rxjs-gerenciamento-estado.service';

@Component({
  selector: 'mv-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
todolist$:Observable<any[]> = new Observable()

constructor(private todoServ:ToDoService){

}

ngOnInit(): void {
  this.todolist$ = this.todoServ.getTask$
  this.todolist$.subscribe(I=> console.log(I))


}


}
