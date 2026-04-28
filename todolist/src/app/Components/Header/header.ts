import { Component } from "@angular/core";
import { DailyTodoComponent } from "../Daily-Todo/daily-todo";
import { NewTodoFormComponent } from "../new-todo-form/new-todo-form";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DailyTodoComponent, NewTodoFormComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class HeaderComponent {
  
}