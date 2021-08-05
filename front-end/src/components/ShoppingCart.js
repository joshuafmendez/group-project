const ShoppingCart = ({ cart, setCart }) => {
  const removeFromCart = (i) => {
    const filterCart = cart.filter((prod, index) => {
      return i !== index
    });
    setCart(filterCart);
  };

  return (
    <div>
      <ul>
        {cart.map((prod, i) => (
          <li key={i} id={i}>
            {prod.name} ${prod.price}
            <button
              className="btn btn-outline-primary"
              onClick={() => removeFromCart(i)}
            >
              Remove From Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
