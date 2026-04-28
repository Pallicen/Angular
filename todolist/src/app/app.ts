import { Component, signal } from '@angular/core';
import { HeaderComponent } from './Components/Header/header';
import { TodolistComponent } from './Components/Todolist/todolist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, TodolistComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
}
