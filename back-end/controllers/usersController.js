const users = require("express").Router();
const validation = require("../middleware/validation");
const authorization = require("../middleware/authorization");
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  editUser,
  loginUser,
} = require("../queries/users");

// get all users
users.get("/", authorization, async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.json({ status: "success", payload: allUsers });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// get user by id
users.get("/user/:id", authorization, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (user["user_id"]) {
      res.json({ status: "success", payload: user });
    } else {
      throw `Sorry there is no user with the id of ${id}`;
    }
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// delete user
users.delete("/user/:id", authorization, async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUser(id);
    res.json({ status: "success", payload: deletedUser });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// edit user
users.put("/user/:id", authorization, async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const editedUser = await editUser(id, body);
    res.json({ status: "success", payload: editedUser });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// register a user
users.post("/register", validation, async (req, res) => {
  try {
    const user = await createUser(req.body);
    if (user !== "User Exists") {
      res.json({ status: "success", payload: user });
    } else {
      res.status(404).json({ status: "failure", payload: user });
    }
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// login a user
users.post("/login", validation, async (req, res) => {
  try {
    const user = await loginUser(req.body);
    res.json({ status: "success", payload: user });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// testing authorization
users.get("/is-verified", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

module.exports = users;
