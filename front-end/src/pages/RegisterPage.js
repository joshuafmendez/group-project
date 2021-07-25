const { default: Register } = require("../components/Register");

const RegisterPage = ({ setAuth }) => {
  return (
    <div>
      <Register setAuth={setAuth} />
    </div>
  );
};

export default RegisterPage;
