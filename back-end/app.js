// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const products = require("./controllers/productsController.js");
const users = require("./controllers/usersController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// CONTROLLERS & ROUTES
app.use("/products", products);
app.use('/users', users)
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// EXPORT
module.exports = app;
