const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    const query = "SELECT * FROM emotions";
    const allProducts = await db.any(query);
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getProduct = async (id) => {
  try {
    const query = "SELECT * FROM emotions WHERE id=$1";
    const aProduct = await db.one(query, id);
    return aProduct;
  } catch (error) {
    return error;
  }
};

const createProduct = async (product) => {
  const { name, price, description } = product;
  try {
    const query =
      "INSERT INTO emotions (name, price, description) VALUES ($1,$2,$3) RETURNING *";
    const newProduct = await db.one(query, [name, price, description]);
    return newProduct;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {
  try {
    const query = "DELETE FROM emotions WHERE id=$1 RETURNING *";
    const deletedProduct = await db.one(query, id);
    return deletedProduct;
  } catch (error) {
    return error;
  }
};

const editProduct = async (id, product) => {
  try {
    const { name, price, description } = product;
    const query =
      "UPDATE emotions SET name=$1,price=$2,description=$3 WHERE id=$4 RETURNING *";
    const editedProduct = await db.one(query, [name, price, description, id]);
    return editedProduct;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  editProduct,
};
