import { Link } from 'react-router-dom';

const ProductListItem = ({ product }) => {
    return (
        <div>
            <ul>
                <li><Link to={`/products/${product.id}`}>{product.name}</Link> ${product.price}</li>
            </ul>
        </div>
    )
}

export default ProductListItem
