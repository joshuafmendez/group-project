import axios from "axios";
import { useState } from "react";
import { apiURL } from "../util/apiURL";
const API = apiURL()

const NewProductForm = ({ history }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const addProduct = async (newProd) => {
    try{
        let res = await axios.post(`${API}/products`, newProd);
        setProduct((prevProd) => [...prevProd, res.data])
    } catch(err) {
        console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct()
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
          <input id='price'
          value={product.price}
          required
          onChange={handleChange}
          />

        <label htmlFor='description'>Description:</label>
        <input id='description' 
            value={product.description}
            onChange={handleChange}
            />
            <button type="submit" className='submitButton'>Submit</button>

        </form>
      </section>
    </div>
  );
};

export default NewProductForm;
