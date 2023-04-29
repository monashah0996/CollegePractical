import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';

import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import GroceryApp from './GroceryApp';

import Footer from './pages/Footer';
import Navigation from './pages/Navigation';

import './App.css';

const App2 = () => {
  const [lang, setLang] = useState('english');

  return (
    <div>
      <LanguageContext.Provider value={lang}>
        <ColorContext.Provider value='blue'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='news/:newid/:test' element={<News />} />
            <Route path='about' element={<About />} />
            <Route path='grocery' element={<GroceryApp />} />
          </Routes>
          <Footer />
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

export default App2;
