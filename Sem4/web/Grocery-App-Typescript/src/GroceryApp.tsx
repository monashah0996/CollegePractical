import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './components/Header';
import Grocery from './components/Grocery';
import AddGroceryForm from './components/AddGroceryForm';
import Search from './components/Search';

type GroceryListProps = {
  name: string;
  quantity: number;
  id: string;
}[];

const GroceryApp = () => {
  const [search, setSearch] = useState('');
  const [groceryList, setGroceryList] = useState<GroceryListProps>([
    {
      name: 'Apples',
      quantity: 2,
      id: '1',
    },
    {
      name: 'Eggs',
      quantity: 4,
      id: '2',
    },
    {
      name: 'Oranges',
      quantity: 3,
      id: '3',
    },
    {
      name: 'Cucumber',
      quantity: 2,
      id: '4',
    },
  ]);

  const handleDelete = (id: string) => {
    setGroceryList((prev) => prev.filter((g) => g.id !== id));
  };

  const handleAddGrocery = (name: string) => {
    setGroceryList((prevState) => [
      ...prevState,
      { name: name, quantity: 0, id: uuidv4() },
    ]);
  };

  const handleQuantityChange = (id: string, data: number) => {
    setGroceryList((currentUpdatedState) =>
      currentUpdatedState.map((g) =>
        g.id === id
          ? {
              ...g,
              quantity:
                data > 0
                  ? g.quantity + data
                  : g.quantity > 0
                  ? g.quantity + data
                  : 0,
            }
          : g
      )
    );
  };

  const filterGrocery = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };
  return (
    <div>
      <AddGroceryForm onAddGrocery={handleAddGrocery} />
      <Header title='Grocery list' totalItems={groceryList.length} />
      <Search filterTasks={filterGrocery} />
      {groceryList
        .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
          <Grocery
            name={g.name}
            quantity={g.quantity}
            onDelete={handleDelete}
            onQuantityChange={handleQuantityChange}
            id={g.id}
            key={g.id.toString()}
          />
        ))}
    </div>
  );
};

export default GroceryApp;
