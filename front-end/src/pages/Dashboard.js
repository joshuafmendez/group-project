import UserList from "../components/admin/UserList";

const Dashboard = ({ setAuth }) => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button className="" onClick={logout}>
        Logout
      </button>
      <UserList />
    </div>
  );
};

export default Dashboard;
