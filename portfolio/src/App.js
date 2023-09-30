import React from 'react';
import "./index.css"

import Home from './routs/Home';
import About from './routs/About';
import Project from './routs/Project';
import Contact from './routs/Contact';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
