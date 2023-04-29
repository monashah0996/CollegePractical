import React, { useState } from 'react';
type Props = {
  onAddGrocery: (name: string) => void;
};

const AddGroceryForm = ({ onAddGrocery }: Props) => {
  const [groceryName, setGroceryName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroceryName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddGrocery(groceryName);

    setGroceryName('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <fieldset>
        <legend>Add Grocery</legend>
        {/* <two way data binding with value attribute /> */}
        <input
          type='text'
          value={groceryName}
          onChange={handleChange}
          placeholder='Enter Grocery'
        />

        <input type='submit' value='Add Grocery' />

        {/* <button onClick={handleSubmit}>Add Grocery</button> */}
      </fieldset>
    </form>
  );
};

export default AddGroceryForm;
