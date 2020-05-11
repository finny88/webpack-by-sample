import { delay, put, takeEvery } from '@redux-saga/core/effects';
import { CounterActionsKinds } from './actionsTypes';

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

export const increaseAsyncStartAction = (payload?: number): ICounterAction => ({
  type: CounterActionsKinds.INCREASE_START,
  payload,
});

export function* increaseAsync(action: ICounterAction): Generator {
  delay(1000);

  yield put({ type: CounterActionsKinds.INCREASE_FINISH, payload: action.payload });
}

export function* watchIncrementAsync(): Generator {
  yield takeEvery(CounterActionsKinds.INCREASE_START, increaseAsync);
}
