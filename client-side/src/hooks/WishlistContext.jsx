// src/context/WishlistContext.js

import React, { createContext } from 'react';
import { useWishlist } from '@hooks/useWishlist';

// Create the Context
export const WishlistContext = createContext();

// Create the Provider component
export const WishlistProvider = ({ children }) => {
  // Use the custom hook to manage wishlist state
  const wishlist = useWishlist();

  return (
    <WishlistContext.Provider value={wishlist}>
      {children}
    </WishlistContext.Provider>
  );
};
