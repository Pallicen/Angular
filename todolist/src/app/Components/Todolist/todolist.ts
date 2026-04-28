import { Component, inject, signal } from '@angular/core';
import { TodoitemComponent } from '../Todoitem/todoitem';
import { todos } from '../../todos';
import { TodoService } from '../../todos.services';


@Component({
  selector: 'app-todolist',
  imports: [TodoitemComponent],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})

export class TodolistComponent {


  todosService = inject(TodoService);

  todos = this.todosService.getAllTodos();

  itemDone(id: number) {
    this.todosService.completeTodo(id);
  }
}
