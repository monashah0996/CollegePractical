import React, { useState } from 'react';
type Props = {
  addTask: (title: string) => void;
};

const AddTaskForm = ( {addTask} : Props) => {
  const [titleName, setTitle] = useState('');


  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTask(titleName);

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <fieldset>
        <input
        value={titleName}
          type='text' 
          onChange={handleChange1}
          placeholder='Enter Task'
        />
        <input type='submit' value='Add Task to Title' />
      </fieldset>
    </form>
  );
};

export default AddTaskForm;
