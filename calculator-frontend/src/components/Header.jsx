import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header() {
  const { logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Pricing Calculator</a>
        <form className="d-flex" onSubmit={logoutUser}>
          <button className="btn btn-nav btn-dark btn-custom" type="submit">
            Log out
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
