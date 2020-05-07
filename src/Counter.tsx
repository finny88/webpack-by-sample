import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, IAppState, decrease, reset } from './redux';

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: IAppState) => state.counter.count);

  return (
    <div>
      <div>
        <span>Counter: {count}</span>
      </div>
      <div>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
