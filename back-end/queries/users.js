const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

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

const createUser = async (user) => {
  const { user_name, user_email, user_password } = user;
  try {
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
    return newUser;
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

// still working on
const loginUser = async (user) => {
  const { user_email } = user;
  try {
    const query = "SELECT * FROM users WHERE user_email=$1";
    const newUser = await db.one(query, [user_email]);
    console.log(newUser);
    return newUser;
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
