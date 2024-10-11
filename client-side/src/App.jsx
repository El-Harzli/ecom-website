// src/App.jsx

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductFilter from './pages/ProductFilter/ProductFilter';
import FavoriteProducts from './pages/FavoriteProducts/FavoriteProducts';
import ScrollToTop from './components/Utils/UseScrollToTop';

// Import Wishlist Provider
import { WishlistProvider } from '@hooks/WishlistContext';

function App() {
  return (
    <div>
      <Toaster position="bottom-center" richColors />
      <BrowserRouter>
        <ScrollToTop />
        {/* Wrap your app in WishlistProvider */}
        <WishlistProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:productId' element={<ProductDetail />} />
            <Route path='/product-filter' element={<ProductFilter />} />
            <Route path='/favorite-products' element={<FavoriteProducts />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </WishlistProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
