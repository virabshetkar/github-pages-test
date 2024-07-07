import { Routes } from '@angular/router';
import { provideStates } from '@ngxs/store';
import { CounterState } from './pages/counter/store/counter.state';
import { TodoState } from './pages/todo/store/todo.state';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'counter',
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./pages/counter/counter.component').then(
        (c) => c.CounterComponent
      ),
    providers: [provideStates([CounterState])],
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./pages/todo/todo.component').then((c) => c.TodoComponent),
    providers: [provideStates([TodoState])],
  },
];
