import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, IAppState, decrease, reset } from './redux';

export const Counter: FC = () => {
  const numberInputRef = useRef<HTMLInputElement>();

  const dispatch = useDispatch();

  const count = useSelector((state: IAppState) => state.counter.count);

  return (
    <div>
      <div>
        <span>Counter: {count}</span>
      </div>
      <div>
        <button onClick={() => dispatch(increase(parseInt(numberInputRef.current.value)))}>
          Increase
        </button>
        <button onClick={() => dispatch(decrease(parseInt(numberInputRef.current.value)))}>
          Decrease
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <input type="number" ref={numberInputRef} />
      </div>
    </div>
  );
};
