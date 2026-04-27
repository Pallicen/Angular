import { Component } from "@angular/core";
import { DailyTodoComponent } from "../Daily-Todo/daily-todo";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DailyTodoComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class HeaderComponent {
  
}