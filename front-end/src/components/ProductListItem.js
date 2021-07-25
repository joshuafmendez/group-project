import { Link } from "react-router-dom";

const ProductListItem = ({ product, setCart }) => {
  const addToCart = () => {
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="justify-content-lg-around">
      <ul className="list-group  p-5">
        <li className="list-group-item-primary">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
          {`$${product.price}`}
          {/* <img src={product.image} alt={product.name}/> */}
          <button
            className="btn btn-outline-success btn-sm"
            onClick={addToCart}
          >
            Add To Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductListItem;
