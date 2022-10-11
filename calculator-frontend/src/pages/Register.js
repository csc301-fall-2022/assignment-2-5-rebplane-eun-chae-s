import React from 'react';
import Header from "../components/Header";
import {useNavigate} from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <div className="loginPage">
      <form>
      <div className="form-group row">
        <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username: </label>
        <div className="col-sm-10">
          <input type="username" className="form-control" id="inputUsername" placeholder="Username"/>
        </div>
      </div>
      <br/>
      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password: </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
        </div>
      </div>
      <button type="submit"  onClick={event => {navigate('/cart')}} className="btn btn-dark btn-custom btn-lg">Register</button>
    </form>
    </div>
    </div>
  );
}

export default Register;
