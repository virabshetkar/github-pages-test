import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteTodo, TodoState } from '../../store/todo.state';

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.scss',
})
export class ListTodoComponent {
  store = inject(Store);
  todos$ = this.store.select(TodoState.getTodos);

  delete(id: number) {
    this.store.dispatch(new DeleteTodo({ id }));
  }
}
