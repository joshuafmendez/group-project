import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import ProductListItem from "./ProductListItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = apiURL();

const ProductList = ({ setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${API}/products`);

        setProducts(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const sortByAsc = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByDesc = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };

  return (
    <div>
      <button className="btn btn-outline-primary mt-2" onClick={sortByAsc}>
        Ascending
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={sortByDesc}>
        Descending
      </button>
      <section>
        {products.map((product, i) => {
          return (
            <ProductListItem key={i} product={product} setCart={setCart} />
          );
        })}
        <ToastContainer />
      </section>
    </div>
  );
};

export default ProductList;
