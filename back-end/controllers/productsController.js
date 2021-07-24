const products = require("express").Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  editProduct,
} = require("../queries/products");

// get all products
products.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    res.json({ status: "success", payload: allProducts });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// get product by id
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    if (product["id"]) {
      res.json({ status: "success", payload: product });
    } else {
      throw `Sorry there is no emotion with the id of ${id}`;
    }
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// create a product
products.post("/", async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.json({ status: "success", payload: product });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// delete product
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProduct(id);
    res.json({ status: "success", payload: deletedProduct });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

// edit product
products.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  try {
    const editedProduct = await editProduct(id, body);
    res.json({ status: "success", payload: editedProduct });
  } catch (err) {
    res.status(404).json({ status: "failure", payload: err });
  }
});

module.exports = products;
