import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";

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
      }
    };
    getProduct();
  }, [id]);

  const handleDelete = async () => {
    await deleteProduct();
    history.push("/products");
  };

  return (
    <tr>
      <td>Product Details</td>
      <td>Product: {product.name}</td>
      <td>Description: {product.description}</td>
      <td>Price: ${product.price}</td>
      <Link to="/products">
        <button>Back</button>
      </Link>
      <button className="btn btn-outline-danger" onClick={handleDelete}>
        Delete
      </button>
    </tr>
  );
};

export default ProductDetail;
