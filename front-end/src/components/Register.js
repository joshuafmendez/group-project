import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const Register = ({ setAuth }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = input;

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password, name };
    console.log(body)
    try {
      const { data } = await axios.post(`${API}/users/register`, body);
      if (data.payload.token) {
        localStorage.setItem("token", data.payload.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=""
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <input
          className=""
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <input
          className=""
          type="test"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />

        <button className="">Submit</button>
      </form>
      <Link to="/">Login</Link>
    </>
  );
};
export default Register;
