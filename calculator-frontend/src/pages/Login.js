import React, { useContext } from "react";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext.js";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.inputUsername.value;
    const password = e.target.inputPassword.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <div>
      <Header />
      <div className="loginPage" onSubmit={handleSubmit}>
        <form>
          <div className="form-group row">
            <label htmlFor="inputUsername" className="col-sm-2 col-form-label">
              Username:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="username"
                className="form-control"
                id="inputUsername"
                placeholder="Username"
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password:{" "}
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-dark btn-custom btn-lg">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
