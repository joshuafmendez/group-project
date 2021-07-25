import { useState } from "react";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";

const Index = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <div>
      <h1>Emo Products!</h1>
      <ProductList setCart={setCart} />
      <button class="btn btn-primary" type="button" value="Show Shopping Cart" onClick={() => setIsCartVisible((prevState) => !prevState)}>
        Shopping Cart
      </button>
      {isCartVisible && <ShoppingCart cart={cart} setCart={setCart} />}
    </div>
  );
};

export default Index;
