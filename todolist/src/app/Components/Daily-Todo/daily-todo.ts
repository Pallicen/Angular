import { Component, signal } from "@angular/core";
import { todos } from '../../todos';

@Component({
  selector: 'app-daily-todo',
  standalone: true,
  imports: [],
  templateUrl: './daily-todo.html',
  styleUrl: './daily-todo.css'
})

export class DailyTodoComponent {
  todo = signal(this.getNewRandomTodo());
  // todo = this.getNewRandomTodo();

  getNewRandomTodo() {
    const todo = Math.floor(Math.random() * todos.length);
    return todos[todo];
  }
  
  setNewRandomTodo() {
    this.todo.set(this.getNewRandomTodo());
  }
}