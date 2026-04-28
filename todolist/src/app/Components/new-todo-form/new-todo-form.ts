import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../todos.services';

@Component({
  selector: 'app-new-todo-form',
  imports: [FormsModule],
  templateUrl: './new-todo-form.html',
  styleUrl: './new-todo-form.css',
})
export class NewTodoFormComponent {

  todosService = inject(TodoService);

  newTodoInput = '';

  formSubmit() {
    this.todosService.addNewTodo(this.newTodoInput)
  }
}
