import axios from "axios";
import { useState } from "react";
import { apiURL } from "../util/apiURL";
import { useHistory } from "react-router-dom";

const API = apiURL();

const NewProductForm = () => {
    const history = useHistory()

    const addProduct = async (newProd) => {
      try {
        await axios.post(`${API}/products`, newProd);
      } catch (err) {
        console.log(err);
      }
    };

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });


  const handleChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    history.push('/products')
  };


  return (
    <div>
      <h1>Add A New Emotion!</h1>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={product.name}
            required
            onChange={handleChange}
          />

          <label htmlFor="price">Price:</label>
          <input
            id="price"
            value={product.price}
            required
            onChange={handleChange}
          />

          <label htmlFor="description">Description:</label>
          <input
            id="description"
            value={product.description}
            onChange={handleChange}
          />
          <input type="submit" className="submitButton" value='submit' />
           
        </form>
      </section>
    </div>
  );
};

export default NewProductForm;
