import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable,tap } from "rxjs";
import { Store, Task } from "./task";
@Injectable({
  providedIn:'root'
})

export class ToDoService{
  constructor(private http:HttpClient,
    private store:Store){
  }

  getTask$: Observable<Task[]> =
  this.http.get<Task[]>('http://localhost:8080/Task/get')
  .pipe(tap(next => this.store.set('todolist',next)))

  getTask(){
    return this.http.get('http://localhost:8080/Task/get')
  }

}
