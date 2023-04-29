import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { ProjectProvider } from './store/ProjectContext';
import { Navigation } from './components/Navigation';
import Projects from './components/Project';


const App: React.FC = () => {
  return (  
    <Router>
      <ProjectProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ProjectProvider>
    </Router>
  );
};

export default App;
