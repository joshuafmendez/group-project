import axios from "axios";
import { useState } from "react";
import { apiURL } from "../util/apiURL";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(product);
    toast.success(`You have successfully added ${product.name}`);
    history.push("/products");
  };
  <h1>Add A New Emotion!</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column p-3">
          <div className=" form-group-primary input-group-prepend" type="text">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              value={product.name}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group input-group-prepend" type="number">
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              value={product.price}
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-group-prepend" type="text">
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="row mt-6">
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
