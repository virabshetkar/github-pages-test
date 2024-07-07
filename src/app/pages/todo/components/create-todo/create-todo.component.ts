import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddTodo } from '../../store/todo.state';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  fb = inject(FormBuilder);

  store = inject(Store);

  todoForm = this.fb.group({
    id: this.fb.nonNullable.control(0),
    title: this.fb.nonNullable.control('', [Validators.required]),
  });

  submit() {
    if (this.todoForm.valid) {
      this.store.dispatch(new AddTodo({ title: this.todoForm.value.title! }));
    }
  }
}
