import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../../util/apiURL";

const API = apiURL();

const UserEditForm = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    // user_password: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${API}/users/user/${id}`);
        // console.log(data.payload);
        setUser(data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const updateUser = async (updatedUser, id) => {
    try {
      await axios.put(`${API}/users/user/${id}`, updatedUser);
      setUser(updatedUser);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user, id);
    history.push(`/users/${id}`);
  };

  const { user_name, user_email } = user;
  return (
    <div>
      <h1>Edit This Transaction</h1>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_name">Username:</label>
          <input id="user_name" value={user_name} required onChange={handleChange} />
          <label htmlFor="user_email">Email:</label>
          <input
            id="user_email"
            value={user_email}
            required
            onChange={handleChange}
          />
          {/* <label htmlFor="user_password">Password:</label>
          <input
            id="user_password"
            type="password"
            value={user_password}
            required
            onChange={handleChange}
          /> */}

          <input type="submit" className="submitButton" value="submit" />
        </form>
      </section>
    </div>
  );
};

export default UserEditForm;
