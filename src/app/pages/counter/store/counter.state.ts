import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export class IncrementCounter {
  static readonly type = '[Counter] Increment';
}

export class DecrementCounter {
  static readonly type = '[Counter] Decrement';
}

export type CounterStateModel = {
  counter: number;
};

@State<CounterStateModel>({
  name: 'Counter',
  defaults: { counter: 0 },
})
@Injectable()
export class CounterState {
  /**
   *
   */
  constructor() {}

  @Selector()
  static getCounter(state: CounterStateModel) {
    return state.counter;
  }

  @Action(IncrementCounter)
  incrementCounter(ctx: StateContext<CounterStateModel>) {
    ctx.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  @Action(DecrementCounter)
  decrementCounter(ctx: StateContext<CounterStateModel>) {
    ctx.setState(({ counter }) => ({ counter: counter - 1 }));
  }
}
