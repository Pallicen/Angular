import { computed, Injectable, signal } from '@angular/core';
import { todos } from './todos';
import { Todo } from './Models/todo.model';

@Injectable( {
  providedIn: 'root'
})

export class TodoService {
  todos = signal(todos);

  filteredTodos = computed(() => this.todos().filter(t => !t.done));

  getAllTodos() {
    return this.filteredTodos;
  }

  addNewTodo(todo:string) {
    const newTodo: Todo = {
      id: this.todos().length + 1,
      todo: todo,
      done: false
    }
    const newTodos = [...this.todos(), newTodo]
    this.todos.set(newTodos);
  }

  completeTodo(id:number) {

  const newTodos = this.todos().map(todo => 
      todo.id == id ? {...todo, done:true} : todo
  );

  this.todos.set(newTodos);

  }
}