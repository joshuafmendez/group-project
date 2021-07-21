const products = require("express").Router();

// const {} = require("../queries/products");

products.get("/", (req, res) => {
  try {
    res.json({status: "success", payload: "Get All"});
  } catch (err) {res.json({status: "success", payload: err})}
});

products.get("/:id", (req, res) => {
  try {
    res.json({status: "success", payload: "Get by ID"});
  } catch (err) {res.json({status: "success", payload: err})}
});

products.post("/", (req, res) => {
  try {
    res.json({status: "success", payload: "Post"});
  } catch (err) {res.json({status: "success", payload: err})}
});

products.delete("/:id", (req, res) => {
  try {
    res.json({status: "success", payload: "delete"});
  } catch (err) {res.json({status: "success", payload: err})}
});

products.put("/:id", (req, res) => {
  try {
    res.json({status: "success", payload: "Edit"});
  } catch (err) {res.json({status: "success", payload: err})}
});

module.exports = products;
