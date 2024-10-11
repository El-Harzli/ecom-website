import React, { useState, useEffect, useRef, useContext } from 'react'
import './WishlistIcon.css'

import useToast from '@src/hooks/useToast';
import { WishlistContext } from '../../../hooks/WishlistContext';

function WishlistIcon({product, type}) {
  const {wishlistItems, wishlistCounter, addToWishlist, removeFromWishlist} = useContext(WishlistContext);

  // This will not work when the type = nav because in the MainNavbar.jsx we are not passing product, because it does not require it
  // So in order to not throw an error, we need to check if product does exist, if it does we do our check, else it's simply false
  const isFavorite = product ? wishlistItems.some(item => item.id === product.id) : false;

  const [isWishlisted, setIsWishlisted] = useState(isFavorite);
  const { showToastSuccess } = useToast();

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (product){
      setIsWishlisted((prev) => !prev);  
    }
  }

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
        firstRender.current = false;
        return;
    }
    if (product && (type === "detail" || type === "product")){
      if (isWishlisted) {
          showToastSuccess("Product Added Successfully");
          addToWishlist(product)
          
      } else {
          showToastSuccess("Product Removed Successfully");
          removeFromWishlist(product.id)
      }
    }
}, [isWishlisted, product, type]);


// }, [isWishlisted, product, type, addToWishlist, removeFromWishlist, showToastSuccess]);
// This code below is what I did, and the code above is what chatgpt recommended for some reason... I need to know why... 
// + it crashed my app
// }, [isWishlisted]);

  const returnSpecifiedIcon = () => {
    switch (type) {
      case 'product' :
      case 'detail':
        return (
          <button className="product-add-to-wishlist" onClick={toggleWishlist}>
          {/* Conditionally render the heart icons based on the wishlist state */}
          <i className={`bx bx-heart ${isWishlisted ? 'inactive' : 'active'}`}></i>
          <i className={`bx bxs-heart ${isWishlisted ? 'active' : 'inactive'}`}></i>
          </button>
        );
      case 'nav' : 
        return (
          <span className="icon icon-heart">
          <i className="bx bx-heart"></i>
          {wishlistCounter > 0 && <span className="counter">{wishlistCounter}</span>}
        </span>
        )
        case 'close' : 
        return (
          <i onClick={() => removeFromWishlist(product.id)} className='bx bx-x'></i>
        )

      default:
        break;
    }
  }
  return (
    <>
      {returnSpecifiedIcon()}
    </>
  )
}

export default WishlistIcon