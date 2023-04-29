import React, { useState } from 'react';

type Props = {
  quantity: number;
};
const Quantity = (props: Props) => {
  const [quan, setQuan] = useState(props.quantity);
  return (
    <span className='counter'>
      <button
        className='counter-action increment'
        onClick={() => setQuan(quan + 1)}
      >
        +
      </button>
      <span className='counter-items'>{quan}</span>
      <button
        className='counter-action decrement'
        onClick={() =>
          setQuan((currentState) => (currentState > 0 ? currentState - 1 : 0))
        }
      >
        {' '}
        -{' '}
      </button>
    </span>
  );
};

export default Quantity;
