import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BrowserRouter>
  <Routes>
    <Route path="/cart" element={<Cart />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>);
