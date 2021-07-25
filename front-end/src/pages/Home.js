import React from "react";
import Login from "../components/Login";

const Home = ({ setAuth }) => {
  return (
    <div>
      <Login setAuth={setAuth} />
    </div>
  );
};

export default Home;
