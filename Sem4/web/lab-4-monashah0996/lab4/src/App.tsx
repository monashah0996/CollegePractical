import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Post from "./components/Post";
import Todo from "./components/Todo";
import Welcome from "./components/Welcome";
import TaskLists from "./components/TaskLists";
//import { v4 as uuidv4 } from 'uuid';
import LanguageContext from './context/LanguageContext';
import React from "react";
import "./App.css";

const App = () => {
  const [lang, setLang] = useState('english');
  // const [tasklist, setTasklist] = useState([
  //   {
  //     title: "Humber",
  //     tasks: ["Task 1", "Task 2", "Task 3"],
  //     id: 1,
  //   },
  //   {
  //     title: "MERN",
  //     tasks: ["Lab", "Project", "Quiz"],
  //     id: 2,
  //   },
  //   {
  //     title: "Java",
  //     tasks: ["Group Discussion", "Exam", "Assignment"],
  //     id: 3,
  //   },
  // ]);

  // const handleAddTask = (title: string) => {
  //   setTasklist((curr: any) => [
  //     ...curr,
  //     {
  //       id: tasklist.length + 1,
  //       title: title,
  //       tasks: ["example1", "example2", "example3"],
  //     },
  //   ]);
  // };

  // const handleDeleteTask=(id:number)=>{
  //   setTasklist((curr)=>curr.filter((x)=>x.id!== id));
  // }

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={lang}>
        <Welcome/>
      </LanguageContext.Provider>
      <Header/>
      {/* {tasklist.map((t) => {
        const { title, tasks, id } = t;
        return <Task title={title} tasks={tasks} id={id} onDelete={handleDeleteTask} />;
      })} */}
      React Context Text {lang}
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('French')}>French</button>
<Routes>

<Route path='/' element={<App />} />
<Route path='/tasklist' element={<TaskLists />} /> 
<Route path='/home' element={<Home />} /> 
<Route path='/post' element={<Post />} />
<Route path='/todo' element={<Todo />} />
<Route path='/about' element={<About />} />

</Routes>

</BrowserRouter>
  );
};
export default App;
