import { Component, input } from '@angular/core';

interface todo {
  id: number,
  todo: string,
  done: boolean
}

@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.css',
})
export class TodoitemComponent {

  todo = input.required<todo>();

}
