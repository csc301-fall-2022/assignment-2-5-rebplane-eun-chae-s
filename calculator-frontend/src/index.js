import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BrowserRouter>
  <Routes>
    <Route path="/cart" element={<Cart />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>);
