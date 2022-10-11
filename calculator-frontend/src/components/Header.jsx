import React from 'react';
import {useNavigate} from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand">Pricing Calculator</a>
            <form className='d-flex'>
                <button className="btn btn-nav btn-dark btn-custom" onClick={event => {navigate('/login')}} type="submit">Log in</button>
                <button className="btn btn-nav btn-dark btn-custom" onClick={event => {navigate('/register')}} type="submit">Sign up</button>
                <button className="btn btn-nav btn-dark btn-custom"  type="submit">Log out</button>
            </form>
        </div>
    </nav>
);
}

export default Header;
