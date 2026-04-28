import { Component } from '@angular/core';
import { TodoitemComponent } from '../Todoitem/todoitem';
import { todos } from '../../todos';

@Component({
  selector: 'app-todolist',
  imports: [TodoitemComponent],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})

export class TodolistComponent {
  todos = todos.filter(t => !t.done);
}
