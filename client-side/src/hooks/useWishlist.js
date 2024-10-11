// src/hooks/useWishlist.js

import { useState, useEffect } from 'react';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [wishlistCounter, setWishlistCounter] = useState(() => {
    const savedCounter = localStorage.getItem('wishlistCounter');
    return savedCounter ? parseInt(savedCounter, 10) : 0;
  });

  // Update localStorage and wishlistCounter when wishlistItems changes
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    setWishlistCounter(wishlistItems.length);
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    // Check if the product is already in the wishlist
    if (!wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems((prevItems) => [...prevItems, product]);
    }
  };
  

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return {
    wishlistItems,
    wishlistCounter,
    addToWishlist,
    removeFromWishlist
  };
};
