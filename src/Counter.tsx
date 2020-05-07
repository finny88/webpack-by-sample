import React, { useState, FC } from 'react';

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <span>Counter: {count}</span>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};
