import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export type AddTodoModel = { title: string };
export type DeleteTodoModel = { id: number };

export class AddTodo {
  static readonly type = '[Todo] Add';
  constructor(public todo: AddTodoModel) {}
}

export class DeleteTodo {
  static readonly type = '[Todo] Delete';
  constructor(public todo: DeleteTodoModel) {}
}

export type TodoStateModel = {
  id: number;
  title: string;
};

@State<TodoStateModel[]>({
  name: 'todos',
  defaults: [],
})
@Injectable()
export class TodoState {
  counter = 0;
  @Selector()
  static getTodos(state: TodoStateModel[]) {
    return state;
  }

  @Action(AddTodo)
  addTodo({ setState }: StateContext<TodoStateModel[]>, action: AddTodo) {
    setState((state) => [
      ...state,
      { id: this.counter++, title: action.todo.title },
    ]);
  }

  @Action(DeleteTodo)
  deleteTodo({ setState }: StateContext<TodoStateModel[]>, action: DeleteTodo) {
    setState((state) => [
      ...state.filter((todo) => todo.id !== action.todo.id),
    ]);
  }
}
