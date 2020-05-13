import React, { FC, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { increase, IAppState, decrease, reset, increaseAsyncStartAction } from 'store';

export const Counter: FC = () => {
  const numberInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const { count, calculating } = useSelector((state: IAppState) => state.counter, shallowEqual);

  return (
    <div>
      <div>
        <span>Counter: {count}</span>
        {calculating && <span>{' calculating...'}</span>}
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(increase(numberInputRef.current ? parseInt(numberInputRef.current.value) : 1))
          }
        >
          Increase
        </button>
        <button
          onClick={() =>
            dispatch(decrease(numberInputRef.current ? parseInt(numberInputRef.current.value) : 1))
          }
        >
          Decrease
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button
          onClick={() =>
            dispatch(
              increaseAsyncStartAction(
                numberInputRef.current ? parseInt(numberInputRef.current.value) : 1,
              ),
            )
          }
        >
          Increase async
        </button>
        <input type="number" ref={numberInputRef} />
      </div>
    </div>
  );
};
