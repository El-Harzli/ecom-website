import React, {useEffect, useState} from 'react'
import './App.css'

import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import ProductFilter from './pages/ProductFilter/ProductFilter'
import FavoriteProducts from './pages/FavoriteProducts/FavoriteProducts'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ScrollToTop from './components/Utils/UseScrollToTop'

import { Toaster } from 'sonner'


export const Context = React.createContext()


function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  // const [wishlistCounter, setWishlistCounter] = useState(0);
  // const [wishlistItems, setWishlistItems] = useState([]);

  //   // Add a product to the wishlist
  //   const addToWishlist = (product) => {
  //     if (!wishlistItems.some(item => item.id === product.id)) {
  //       setWishlistItems([...wishlistItems, product]);
  //       setWishlistCounter(prevCount => prevCount + 1);
  //     }
  //   };
  
  //   // Remove a product from the wishlist
  //   const removeFromWishlist = (productId) => {
  //     setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  //     setWishlistCounter(prevCount => prevCount - 1);
  //   };

    // Initialize wishlistItems and wishlistCounter from localStorage
    const [wishlistItems, setWishlistItems] = useState(() => {
      const savedWishlist = localStorage.getItem('wishlistItems');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    });
  
    const [wishlistCounter, setWishlistCounter] = useState(() => {
      const savedCounter = localStorage.getItem('wishlistCounter');
      return savedCounter ? parseInt(savedCounter, 10) : 0;  // Default to 0 if no data
    });
  
    // Whenever wishlistItems changes, update localStorage and wishlistCounter
    useEffect(() => {
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
      setWishlistCounter(wishlistItems.length); // Update counter based on the number of wishlist items
    }, [wishlistItems]);
  
    // Whenever wishlistCounter changes, save it to localStorage
    useEffect(() => {
      localStorage.setItem('wishlistCounter', wishlistCounter);
    }, [wishlistCounter]);
  
    const addToWishlist = (product) => {
      setWishlistItems((prevItems) => [...prevItems, product]);
    };
  
    const removeFromWishlist = (id) => {
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
    };



  return (
    <div>
      <Toaster position="bottom-center" richColors />
      <BrowserRouter>
        <ScrollToTop />
        <Context.Provider value={{ wishlistCounter, wishlistItems, addToWishlist, removeFromWishlist }}>

          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product-details/:productId' element={<ProductDetail />} />
            <Route path='/product-filter' element={<ProductFilter />} />
            <Route path='/favorite-products' element={<FavoriteProducts />} />
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
