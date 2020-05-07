import { Dispatch } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { CounterActionsKinds } from './actionsTypes';
import { ICounterState } from './reducer';
import { TIMEOUT } from 'dns';

export interface ICounterAction {
  type: CounterActionsKinds;
  payload?: number;
}

export const increase = (payload?: number): ICounterAction => ({
  type: CounterActionsKinds.INCREASE,
  payload: payload || 1,
});

export const decrease = (payload?: number): ICounterAction => ({
  type: CounterActionsKinds.DECREASE,
  payload: payload || 1,
});

export const reset = (): ICounterAction => ({
  type: CounterActionsKinds.RESET,
});

export const increaseAsync = (
  payload?: number,
): ThunkAction<void, ICounterState, undefined, ICounterAction> => (dispatch: Dispatch) => {
  dispatch({
    type: CounterActionsKinds.INCREASE_START,
  });

  window.setTimeout(() => dispatch({ type: CounterActionsKinds.INCREASE_FINISH, payload }), 1000);
};
