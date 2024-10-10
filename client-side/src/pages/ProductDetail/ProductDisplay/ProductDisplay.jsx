import React, {useEffect, useState, useContext} from 'react'
import './ProductDisplay.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import SizeSelector from '../../../components/UI/SizeSelector/SizeSelector';
import WishlistIcon from '../../../components/UI/WishlistIcon/WishlistIcon';


function ProductDisplay({product}) {
  const [isOpen, setIsOpen] = useState(false);


  // Convert images object to an array of [key, image] pairs
  const imageEntries = Object.entries(product.images);

  const [selectedSize, setSelectedSize] = useState(null)

  // Move the first image to the end
  if (imageEntries.length > 1) {
    const [firstImage] = imageEntries;
    imageEntries.push(imageEntries.shift());
  }

  useEffect(() => {
    function setDynamicHeight() {
      const vh = window.innerHeight * 0.01; 
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  
    setDynamicHeight();
  
    // Recalculate the height on resize (e.g., when the user scrolls or rotates the screen)
    window.addEventListener('resize', setDynamicHeight);
    
  
    return () => window.removeEventListener('resize', setDynamicHeight);
  }, []); // Empty dependency array to run only once on mount
  

  return (
    <div className='product-display'>

        <div className="product-img-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          // slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, hide: false }}
          onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          breakpoints={{
            320: {
              // mobile devices
              slidesPerView: 1,
            },
            480: {
              // small tablets
              slidesPerView: 2,
            },
          }}
          >
          {
            imageEntries.map(([key, image]) => (
            <SwiperSlide key={key} >
              <img src={image} alt="" />
            </SwiperSlide>
            ))
          }
        </Swiper>
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
          <WishlistIcon product={product} type={'detail'}/>

          <div>
            <div onClick={() => setIsOpen(true)} className="select-size">{selectedSize === null ? 'Select Size' : `Selected Size : ${selectedSize}`} <span><i className='bx bx-chevron-down'></i></span></div>
            <button className="add-to-bag"> 
              Add To Bag
            </button>

            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maiores.</div>
          </div>

          
          <SizeSelector product={product} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedSize={setSelectedSize} />
        </div>
    </div>
  )
}

export default ProductDisplay



