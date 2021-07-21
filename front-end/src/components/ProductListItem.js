import { Link } from 'react-router-dom';

const ProductListItem = ({ product }) => {
    return (
        <div>
            <ul>
                <li>{product.name}</li>
            </ul>
        </div>
    )
}

export default ProductListItem
