/*
Followed tutorial from this link: https://github.com/sushil-kamble/django-react-auth
*/
import { Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
