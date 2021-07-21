// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const products = require("./controllers/productsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Products
app.use("/products", products);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// EXPORT
module.exports = app;
