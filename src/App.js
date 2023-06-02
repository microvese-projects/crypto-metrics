import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="/details/converter" element={<Converter />} />
      </Routes>
    </div>
  );
}

export default App;
