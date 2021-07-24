const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator.js");

const getAllUsers = async () => {
  try {
    const query = "SELECT * FROM users";
    const allUsers = await db.any(query);
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const query = "SELECT * FROM users WHERE user_id=$1";
    const aUser = await db.one(query, id);
    return aUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const query = "DELETE FROM users WHERE user_id=$1 RETURNING *";
    const deletedUser = await db.one(query, id);
    return deletedUser;
  } catch (error) {
    return error;
  }
};

const editUser = async (user_id, user) => {
  const { user_name, user_email, user_password } = user;
  //https://www.npmjs.com/package/bcrypt
  //https://stackoverflow.com/questions/46693430/what-are-salt-rounds-and-how-are-salts-stored-in-bcrypt
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const bcryptPassword = await bcrypt.hash(user_password, salt);
  try {
    const query =
      "UPDATE users SET user_name=$1,user_email=$2,user_password=$3 WHERE user_id=$4 RETURNING *";
    const editedUser = await db.one(query, [
      user_name,
      user_email,
      bcryptPassword,
      user_id,
    ]);
    return editedUser;
  } catch (error) {
    return error;
  }
};

const createUser = async (user) => {
  try {
    const { user_name, user_email, user_password } = user;
    // checks to see if user exists
    const registerUser = await db.any(
      "SELECT * FROM users WHERE user_email=$1",
      user_email
    );
    if (registerUser.length !== 0) {
      return "User Exists";
    }
    //https://www.npmjs.com/package/bcrypt
    //https://stackoverflow.com/questions/46693430/what-are-salt-rounds-and-how-are-salts-stored-in-bcrypt
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(user_password, salt);
    const query =
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *";
    const newUser = await db.one(query, [
      user_name,
      user_email,
      bcryptPassword,
    ]);
    const token = jwtGenerator(newUser.user_id);
    return { token };
  } catch (error) {
    return error;
  }
};

const loginUser = async (user) => {
  const { user_email, user_password } = user;
  try {
    // checks to see if user exists
    const query = "SELECT * FROM users WHERE user_email=$1";
    const loginUser = await db.one(query, [user_email]);
    if (loginUser.length === 0) {
      return "Incorrect password or email";
    }
    //https://www.npmjs.com/package/bcrypt
    const validPassword = await bcrypt.compare(
      user_password,
      loginUser.user_password
    );
    if (!validPassword) {
      return res.status(401).json("Incorrect password or email");
    }
    const token = jwtGenerator(loginUser.user_id);
    return { token };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  editUser,
  loginUser,
};
