import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import ProductListItem from "./ProductListItem";

const API = apiURL();

const ProductList = () => {
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

  return (
    <div>
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <ProductListItem key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProductList;
