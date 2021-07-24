import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const Login = ({ setAuth }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const { data } = await axios.post(`${API}/users/login`, body);
      if (data.payload.token) {
        localStorage.setItem("token", data.payload.token);
        setAuth(true);
      } else {
        setAuth(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className=""
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className=""
          value={password}
          onChange={(e) => handleChange(e)}
        />

        <button className="">Submit</button>
      </form>
      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
