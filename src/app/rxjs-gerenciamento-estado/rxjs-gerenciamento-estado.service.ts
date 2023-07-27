import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,tap,map } from "rxjs";
import { Store, Task } from "./task";
import { NotifyService } from "../shared/notify/service/notify.service";
import { NotificacaoType } from "../shared/notify/service/Inotify";
@Injectable({
  providedIn:'root'
})

export class ToDoService{
  constructor(private http:HttpClient,
    private store:Store,
    private noti:NotifyService){
  }

  getTask$: Observable<Task[]> =
  this.http.get<Task[]>('http://localhost:8080/Task/get')
  .pipe(tap({
    next:(next)=>  this.store.set('todolist',next)
    }
  )
)

  getTask(){
    return this.http.get('http://localhost:8080/Task/get')
  }

  putTask(task:Task){
   this.http.put(`http://localhost:8080/Task/${task.id}`, task)
   .subscribe({
              next: () => {
                this.noti.notificar({
                  mensagem: 'OK!',
                  tipo: NotificacaoType.SUCESSO,
                });
                const value = this.store.value.todolist;
                const todolist = value.map((i: Task) => {
                  if (task.id == i.id) {
                    return {
                      ...i,
                      ...task
                    };
                  } else {
                    return i;
                  }
                });
                this.store.set('todolist', todolist);
              },
              error: () => {
                this.noti.notificar({
                  mensagem: 'Deu errado brother, cuide !',
                  tipo: NotificacaoType.ERRO,
                });
              },
   });

  }

  }


