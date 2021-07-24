import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiURL } from '../util/apiURL'

const API = apiURL()

const EditProductForm = () => {
    const history = useHistory()
    const { id } = useParams()
    
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: ''
    })

    const fetchProduct = async () => {
        try {
        const res = await axios.get(`${API}/products/${id}`)
           setProduct(res.data.payload)
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    const handleChange = (e) => {
        setProduct({...product, [e.target.id]: e.target.value})
    }

    const updateProd = async (updatedProd, id) => {
        try{
            await axios.put(`${API}/products/${id}`, updatedProd)
            setProduct(updatedProd)
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateProd(product, id)
        history.push(`/products/${id}`)
    }
    

    return (
        <div>
      <h1>Edit This Transaction</h1>
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

export default EditProductForm
