import React, { useContext } from 'react'
import './FavoriteProducts.css'
import WishlistProduct from '../../components/UI/WishlistProduct/WishlistProduct'
import { WishlistContext } from '../../hooks/WishlistContext';


function FavoriteProducts() {
  const { wishlistItems, wishlistCounter, addToWishlist, removeFromWishlist } = useContext(WishlistContext) ;

  return (
    <div className='favorite-products'>
      {wishlistItems.map((item, index) => {
        return <WishlistProduct key={index} product={item}/>
      } )}
    </div>
  )
}

export default FavoriteProducts