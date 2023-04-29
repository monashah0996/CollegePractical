import { useState } from 'react';
import Car from './components/cars';
import React from 'react';
import './App.css';


const App = () => {
  const [cars, setCar] = useState([
    {
      id: 1,
      make: 'Audi', 
      model: 'A4',
      color: 'green'
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      color: 'purple'
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Bronco',
      color: 'red'
    }
]);

  return (
    <div>
        <h1>Cars List</h1>
        {cars.map((t) => {
          const{make,model,color,id} = t;
          return(
            <Car make={make} model={model} color={color} key={id} />
          );
          
        })}
      </div>
  );
};
export default App;