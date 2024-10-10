// wishlistUtils.js

// Get wishlist from localStorage
export const getWishlist = () => {
    const wishlist = localStorage.getItem('wishlist');
    return wishlist ? JSON.parse(wishlist) : [];
  };
  
  // Add a product to the wishlist
  export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  // Remove a product from the wishlist
  export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };
  
  // Check if a product is in the wishlist
  export const isProductInWishlist = (productId) => {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
  };
  