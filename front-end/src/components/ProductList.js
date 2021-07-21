import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiURL } from '../util/apiURL';
import ProductListItem from './ProductListItem'

const API = apiURL();

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`${API}/products`);
                debugger
                setProducts(res.data.payload);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);


    return (
        <div>
            <section>
                {products.map(product => {
                    return <ProductListItem key={product.id} product={product} />
                })}
            </section>
        </div>
    )
}

export default ProductList
