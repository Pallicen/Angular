import { Component, input, output } from '@angular/core';
import { Todo } from '../../Models/todo.model';


@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.css',
})
export class TodoitemComponent {

  todo = input.required<Todo>();
  doneItem = output<number>()

  itemDone() {
    this.doneItem.emit(this.todo().id)
  }

}
