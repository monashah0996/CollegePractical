import React from "react";

interface Props {
    make: string;
    model: string;
    color: string;
    key: number
  }

const Car = (props: Props) => {
    return (
      <div>
        <h4>Make: {props.make}</h4> 
          <p>Model: {props.model}</p>
          <p>Color:{props.color}</p>
      </div>
    );
  };

  export default Car ;