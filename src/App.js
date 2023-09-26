import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './js/login';
import HelloWorld from './js/HelloWorld';

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/landing" element={<HelloWorld/>} />

        </Routes>
      </Router>
  )
}

export default App;
