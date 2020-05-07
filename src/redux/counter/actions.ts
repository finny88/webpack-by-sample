import { CounterActionsKinds } from './actionsTypes';

export interface ICounterAction {
  type: CounterActionsKinds;
}

export const increase = (): ICounterAction => ({
  type: CounterActionsKinds.INCREASE,
});

export const decrease = (): ICounterAction => ({
  type: CounterActionsKinds.DECREASE,
});

export const reset = (): ICounterAction => ({
  type: CounterActionsKinds.RESET,
});
