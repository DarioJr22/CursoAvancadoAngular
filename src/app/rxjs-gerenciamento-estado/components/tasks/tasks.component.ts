import { Observable,map,filter, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoService } from '../../rxjs-gerenciamento-estado.service';
import { Store } from '../../task';

@Component({
  selector: 'mv-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit,OnDestroy {
todolist$:Observable<any[]> = new Observable();
subscription!:Subscription

constructor(private todoServ:ToDoService,
  private store:Store){

}

ngOnInit(): void {
  this.subscription = this.todoServ.getTask$.subscribe()
 this.todoServ.getTask$
  this.todolist$ = this.store.getTodoList()
  .pipe(
    map(i => i
      .filter(i => !i.task_ini && !i.task_fin)
    )
  )
}

toggleItem(eve:any){
  this.todoServ.putTask(eve)
}


ngOnDestroy(): void {
  this.subscription.unsubscribe()
}


}
