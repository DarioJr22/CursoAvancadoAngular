import { Component, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'mv-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
@Input() task:Task[] | null = []

}
