const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (user_id) => {
  const payload = {
    user_id,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30m" });
};

module.exports = jwtGenerator;
