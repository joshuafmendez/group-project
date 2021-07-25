import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import UserListItem from "./UserListItem";

const API = apiURL();

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${API}/users`);
        setUsers(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <section>
        {users.map((user) => {
          return <UserListItem key={user.user_id} user={user} />;
        })}
      </section>
    </div>
  );
};

export default UserList;
