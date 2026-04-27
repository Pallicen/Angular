import { Component, signal } from '@angular/core';
import { HeaderComponent } from './Components/Header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
}
