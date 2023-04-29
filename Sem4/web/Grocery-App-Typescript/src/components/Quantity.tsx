import React, { useState } from 'react';
type Props = {
  quantity: number;
  id: string;
  onQuantityChange: (id: string, data: number) => void;
};
const Quantity = ({ quantity, id, onQuantityChange }: Props) => {
  return (
    <span className='counter'>
      <button
        className='counter-action increment'
        onClick={() => onQuantityChange(id, 1)}
      >
        {' '}
        +{' '}
      </button>
      <span className='counter-items'>{quantity}</span>
      <button
        className='counter-action decrement'
        onClick={() => onQuantityChange(id, -1)}
      >
        -
      </button>
    </span>
  );
};

export default Quantity;
