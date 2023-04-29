import React from "react";

interface Props {
    title: string;
    tasks: string[];
    key: string
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
      </div>
    );
  };

  export default Task ;