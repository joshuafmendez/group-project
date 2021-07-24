const Dashboard = ({setAuth}) => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <div>
      HELLO!
      <button className="" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
