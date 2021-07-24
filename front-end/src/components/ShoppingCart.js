const ShoppingCart = ({ cart, setCart }) => {

  const removeFromCart = (id) => {
    const filterCart = cart.filter((prod) => {
      return prod.id !== id;
    });
    setCart(filterCart);
  };

  return (
    <div>
      <ul>
        {cart.map((prod) => (
          <li key={prod.id}>
            {prod.name} ${prod.price}
            <button onClick={() => removeFromCart(prod.id)}>
              Remove From Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
