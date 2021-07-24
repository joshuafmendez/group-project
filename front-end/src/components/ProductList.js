import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import ProductListItem from "./ProductListItem";

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
    const sortedProducts = [...products].sort((a, b) => a.price - b.price)
    setProducts(sortedProducts);
  };

  const sortByDesc = () => {
    setProducts([...products].sort((a, b) => b.price - a.price));
  };
    return (
        <div>
            <section>
                {products.map(product => {
                    return <ProductListItem key={product.id} product={product} setCart={setCart}/>
                })}
            </section>
        </div>
    )
}

  return (
    <div>
      <button onClick={sortByAsc}>Ascending</button>
      <button onClick={sortByDesc}>Descending</button>
      <section>
        {products.map((product) => {
          return (
            <ProductListItem
              key={product.id}
              product={product}
              setCart={setCart}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ProductList;
