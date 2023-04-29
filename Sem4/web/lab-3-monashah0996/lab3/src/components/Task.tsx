import React from "react";

interface Props {
    title: string;
    tasks: string[];
    id: number,
    onDelete:(id:number)=>void
  }

const Task = (props: Props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        <div>  
          <ul>
          <li>{props.tasks[0]}</li>
          <li>{props.tasks[1]}</li>
          <li>{props.tasks[2]}</li>
          </ul>
        </div>
        <button onClick={(e)=>props.onDelete(props.id)}>Delete</button>
      </div>
    );
  };

  export default Task ;