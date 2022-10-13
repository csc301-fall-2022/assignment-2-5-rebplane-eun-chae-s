import React from "react";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <Header />
      <h3> Welcome to our pricing calculator!</h3>
      <h4> Please log in or create an account to begin.</h4>
      <button
        type="button"
        onClick={(event) => {
          navigate("/login");
        }}
        className="btn btn-dark btn-lg btn-custom w-100"
      >
        {" "}
        Login{" "}
      </button>
      <br></br>
      <button
        type="button"
        onClick={(event) => {
          navigate("/register");
        }}
        className="btn btn-custom btn-dark btn-lg btn-custom w-100"
      >
        {" "}
        Create an account{" "}
      </button>
    </div>
  );
}

export default Home;
