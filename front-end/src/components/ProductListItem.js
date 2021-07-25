import { Link } from "react-router-dom";

const ProductListItem = ({ product, setCart }) => {
  const addToCart = () => {
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div class="justify-content-lg-around">
      <ul class="list-group  p-5">
        <li class="list-group-item-primary">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
          {`$${product.price}`}
          <button class="btn btn-outline-success btn-sm" onClick={addToCart}>
            Add To Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductListItem;
