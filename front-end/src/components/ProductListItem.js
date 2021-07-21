import { Link } from 'react-router-dom';

const ProductListItem = ({ product }) => {
    return (
        <div>
            <ul>
                <li><Link to={`/product/${product.id}`}>{product.name}</Link> ${product.price}</li>
            </ul>
        </div>
    )
}

export default ProductListItem
