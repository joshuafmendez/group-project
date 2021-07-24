const validation = (req, res, next) => {
  const { user_name, user_email, user_password } = req.body;

  const emailValidation = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };
  console.log(req)
  if (req.originalUrl === "users/register" || req.originalUrl === "/register") {

    //convert each element to a boolean
    if (![user_name, user_email, user_password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!emailValidation(user_email)) {
      return res.status(401).json("Invalid Email");
    }
  } else if (req.originalUrl === "/login") {
    if (![user_email, user_password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!emailValidation(user_email)) {
      return res.status(401).json("Invalid Email");
    }
  }
  next();
};

module.exports = validation;
