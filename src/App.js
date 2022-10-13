import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Routes>
      <AuthProvider>
        <PrivateRoute path="/cart" element={<Cart />} exact />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </AuthProvider>
    </Routes>
  );
}

export default App;
