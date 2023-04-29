import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import Header from './components/Header';
import Grocery from './components/Grocery';
import AddGroceryForm from './components/AddGroceryForm';
import Search from './components/Search';

import './App.css';

const App = () => {
  const [lang, setLang] = useState('english');
  const [search, setSearch] = useState('');
  const [grocery, setGrocery] = useState([
    {
      name: 'Apple',
      quantity: 3,
      id: '1',
    },
    {
      name: 'Oranges',
      quantity: 2,
      id: '2',
    },
    {
      name: 'Cucumber',
      quantity: 4,
      id: '3',
    },
    {
      name: 'Potatos',
      quantity: 4,
      id: '4',
    },
  ]);

  const handleAddGrocery = (name: string) => {
    setGrocery((prev) => [...prev, { name: name, quantity: 0, id: uuidv4() }]);
  };
  const handleDelete = (id: string) => {
    setGrocery((prev) => prev.filter((g) => g.id !== id));
  };

  const handleQuantityChange = (id: string, data: number) => {
    setGrocery((currentUpdatedState) =>
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
      <LanguageContext.Provider value={lang}>
        <ColorContext.Provider value='green'>
          <AddGroceryForm onAddGrocery={handleAddGrocery} />

          <Header title='Grocery Item' totalItems={grocery.length} />

          <Search filterTasks={filterGrocery} />
          {/* <Grocery name='apple' quantity={2} /> */}
          {/* <Grocery name='orange' quantity={4} />
      <Grocery name='cucumber' quantity={3} /> */}
          {grocery
            .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
            .map((g) => (
              <Grocery
                name={g.name}
                quantity={g.quantity}
                key={g.id}
                id={g.id}
                onDelete={handleDelete}
                onQuantityChange={handleQuantityChange}
              />
            ))}
        </ColorContext.Provider>
      </LanguageContext.Provider>

      <div className='App'>
        React Context Text {lang}
        <button onClick={() => setLang('English')}>English</button>
        <button onClick={() => setLang('French')}>French</button>
      </div>
    </div>
  );
};

export default App;
