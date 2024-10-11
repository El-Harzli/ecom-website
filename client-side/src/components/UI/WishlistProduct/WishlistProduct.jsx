import React, {useState} from 'react'
import './WishlistProduct.css'

import SizeSelector from '../SizeSelector/SizeSelector';
import WishlistIcon from '../WishlistIcon/WishlistIcon';

function WishlistProduct({product, removeFromWishlist}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

  return (
    <article className='wishlist-product'>
        <div className="wishlist-product__main-image">
            <img src={product.images.image2} alt="Product Image" />
            <WishlistIcon product={product} type={'close'} />
        </div>
        <div className="wishlist-product__details">
            <div className="wishlist-product__badge">
                New Season
            </div>
            <div className="wishlist-product__brand">
                {product.brand}
            </div>
            <div className="wishlist-product__name">
                {product.name}
            </div>
            <div className="wishlist-product__prices">
                <span className="wishlist-product__prices-old-price">${product.old_price}</span>
                <span className="wishlist-product__prices-new-price">${product.new_price}</span>
            </div>
        </div>

        <div className="wishlist-product__actions">

            <div onClick={() => setIsOpen(true)} className="select-size">
              {selectedSize === null ? 'Select Size' : `Size : ${selectedSize}`}
               <span><i className='bx bx-chevron-down'></i></span>
            </div>

            <button className="add-to-bag">Add To Bag</button>
            <SizeSelector product={product} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedSize={setSelectedSize} />

        </div>
    </article>
  )
}

export default WishlistProduct