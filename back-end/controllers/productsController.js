const products = require("express").Router();

products.get("/", (req,res)=>{
    res.json("Help Me")
})

module.exports = products;