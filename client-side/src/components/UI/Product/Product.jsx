import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import WishlistIcon from '../WishlistIcon/WishlistIcon';

function Product({ product }) {
    return (
        <Link to={`/product-details/${product.id}`}>
            <article className='product'>
                <div className="product-image">
                    <img src={product.images.image2} alt={product.name} />
                </div>
                <div className="product-info">
                    <div className="product-brand">
                        {product.brand}
                    </div>
                    <div className="product-name">
                        {product.name}
                    </div>
                    <div className="product-prices">
                        <span className="product-old-price">${product.old_price}</span>
                        <span className="product-new-price">${product.new_price}</span>
                    </div>
                    <WishlistIcon product={product} type={'product'}/>
                </div>
            </article>
        </Link>
    );
}

export default Product;
