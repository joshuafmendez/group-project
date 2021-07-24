import { Link } from "react-router-dom";

const UserListItem = ({ user }) => {
  const { user_id, user_email } = user;
  return (
    <div>
      <ul>
        <li>
          <Link to={`/users/${user_id}`}>{user_email}</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserListItem;
