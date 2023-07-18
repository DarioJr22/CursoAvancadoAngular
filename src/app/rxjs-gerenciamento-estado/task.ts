import { BehaviorSubject, Observable,map } from "rxjs";

export interface Task{
  id:number;
  name:string;
  data_ini:string;
  data_fin:string;
  task_ini:boolean;
  task_fin:boolean;
  usuario:any;
}
export interface State{
  todoList:Task[]
}

const state:State = {
  todoList:[]
}

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable();
  get value(){
    return this.subject.value
  }

  public getTodoList():Observable<Task[]>{
    return this.store.pipe(
      map(store => store.todoList)
    )
  }

  set(name:string,state:any){
      this.subject.next({
        ...this.value,[name]:state
      }
    )
  }
}
