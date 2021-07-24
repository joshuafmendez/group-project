import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const ProductListItem = ({ product, setCart }) => {

  const addToCart = () => {
    setCart(prevState => [...prevState, product]);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
          {`$${product.price}`}
          <button onClick={addToCart}>
            Add To Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductListItem;
