import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import {Routes, Route} from 'react-router-dom';

function App() {
  return(
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
