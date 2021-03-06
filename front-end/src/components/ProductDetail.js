import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteProduct = async () => {
    try {
      await axios.delete(`${API}/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${API}/products/${id}`);
        setProduct(res.data.payload);
      } catch (error) {
        console.log(error);
        history.push("/*");
      }
    };
    getProduct();
  }, [id, history]);

  const handleDelete = async () => {
    await deleteProduct();
    toast.error(`You have successfully removed ${product.name}`);
    history.push("/products");
  };

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Product: {product.name}</h2>
      <h3>Description: {product.description}</h3>
      <h3>Price: ${product.price}</h3>
      <Link to="/products">
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>

      <Link to={`/products/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
