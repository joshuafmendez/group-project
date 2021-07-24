const validation = (req, res, next) => {
  const { name, email, password } = req.body;

  const emailValidation = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };
  console.log(req.route.path);
  if (req.route.path === "/register") {
    //convert each element to a boolean
    if (![name, email, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!emailValidation(email)) {
      return res.status(401).json("Invalid Email");
    }
  } else if (req.route.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!emailValidation(email)) {
      return res.status(401).json("Invalid Email");
    }
  }
  next();
};

module.exports = validation;
