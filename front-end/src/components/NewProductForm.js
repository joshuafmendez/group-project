import axios from "axios";
import { useState } from "react";
import { apiURL } from "../util/apiURL";
import { useHistory } from "react-router-dom";

const API = apiURL();

const NewProductForm = () => {
  const history = useHistory();

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
    history.push("/products");
  };
  <h1>Add A New Emotion!</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm col-lg-2">
            <label htmlFor="name">Name:</label>
            <input id="name" value={product.name} required onChange={handleChange} />
          </div>
          <div className="col-md col-lg-2">
            <label htmlFor="price">Price:</label>
            <input id="price" value={product.price} required onChange={handleChange} />
          </div>
          <div className="col-md col-lg-2">
            <label htmlFor="description">Description:</label>
            <input id="description" value={product.description} onChange={handleChange} />
          </div>
          <div className="row mt-3">
            <div className="col-sm">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProductForm;
