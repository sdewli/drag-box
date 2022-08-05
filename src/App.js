import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Page2 from './Components/Page2';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/page2' element={<Page2/>}/>
    </Routes>
    </Router>
  );
}

export default App;
