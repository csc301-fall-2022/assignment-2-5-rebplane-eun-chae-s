import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
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
