import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { title } from 'process';


const App = () => {
  const [tasklist, setTasklist] = useState([
  {
      title: 'Humber',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
  },
  {
      title: 'MERN',
      tasks: ['Lab', 'Project', 'Quiz'],
      id: 2,
  },
  {
      title: 'Java',
      tasks: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
  },
]);
  return (
    <div>
        <Header title='Task Lists' totalItems={9} />
        {tasklist.map((t) => {
          const{title,tasks,id} = t;
          return(
            <Task title={title} tasks={tasks} key={id.toString()} />
          );
          
        })}
      </div>
  );
};
export default App;