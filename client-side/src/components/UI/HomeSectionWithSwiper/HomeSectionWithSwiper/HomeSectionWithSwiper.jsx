import React from 'react'
import './HomeSectionWithSwiper.css'

import CustomSwiper from '@UI/CustomSwiper/CustomSwiper'
import ShopNowButton from '@UI/ShopNowButton/ShopNowButton'

function HomeSectionWithSwiper({title, data, destination}) {
  return (
    <section className='section-with-swiper'>
        {
            title && ( <div className="section-with-swiper__title">
                {title}
            </div>)
        }
       
        <CustomSwiper data={data} />

        <ShopNowButton destination={destination} />
    </section>
  )
}

export default HomeSectionWithSwiper