import React from "react";
import { useState } from "react";
import Task from "../components/Task";
import AddTaskForm from "../components/AddTaskForm";

const TaskLists = () => {
  const [tasklist, setTasklist] = useState([
    {
      title: "Humber",
      tasks: ["Task 1", "Task 2", "Task 3"],
      id: 1,
    },
    {
      title: "MERN",
      tasks: ["Lab", "Project", "Quiz"],
      id: 2,
    },
    {
      title: "Java",
      tasks: ["Group Discussion", "Exam", "Assignment"],
      id: 3,
    },
  ]);
  const handleDeleteTask = (id: number) => {
    setTasklist((curr) => curr.filter((x) => x.id !== id));
  };
  const handleAddTask = (title: string) => {
    setTasklist((curr: any) => [
      ...curr,
      {
        id: tasklist.length + 1,
        title: title,
        tasks: ["example1", "example2", "example3"],
      },
    ]);
  };
  return (
    <div>
        <AddTaskForm addTask={handleAddTask} />
      {tasklist.map((t: any) => {
        const { title, tasks, id } = t;
        return (
          <Task
            title={title}
            tasks={tasks}
            id={id}
            onDelete={handleDeleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskLists;
