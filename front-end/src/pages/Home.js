import React from "react";
import Login from "../components/Login";

const Home = ({ setAuth }) => {
  return (
    <div>
      <h1>WELCOME TO THE ONE STOP EMO SHOP!</h1>
      <Login setAuth={setAuth} />
    </div>
  );
};

export default Home;
