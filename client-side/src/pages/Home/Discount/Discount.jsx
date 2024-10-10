import React from 'react'
import './Discount.css'

import HomeSectionWithSwiper from '../../../components/UI/HomeSectionWithSwiper/HomeSectionWithSwiper/HomeSectionWithSwiper'
import {my_products} from '@assets/all_product'

function Discount() {
  return (
    <HomeSectionWithSwiper             
        title={"Enjoy 30% Off Your New-Season Essentials!"}
        data={my_products}
        destination={"/Discount"}  />
  )
}

export default Discount