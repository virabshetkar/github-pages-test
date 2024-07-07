import { Component } from '@angular/core';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CreateTodoComponent, ListTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {}
