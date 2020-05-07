import { ICounterAction } from './actions';
import { CounterActionsKinds } from './actionsTypes';

export interface ICounterState {
  count: number;
}

const defaultCounterState: ICounterState = {
  count: 0,
};

export const counterReducer = (
  state: ICounterState = defaultCounterState,
  action: ICounterAction,
): ICounterState => {
  switch (action.type) {
    case CounterActionsKinds.INCREASE:
      return {
        count: state.count + action.payload,
      };
    case CounterActionsKinds.DECREASE:
      return {
        count: state.count - action.payload,
      };
    case CounterActionsKinds.RESET:
      return defaultCounterState;
  }

  return state;
};
