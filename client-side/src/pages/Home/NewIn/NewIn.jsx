import React from 'react'
import './NewIn.css'

import {my_products} from '@assets/all_product'
import HomeSectionWithSwiper from '../../../components/UI/HomeSectionWithSwiper/HomeSectionWithSwiper/HomeSectionWithSwiper'

function NewIn() {    
  return (
    <div className='new-in'>
        <HomeSectionWithSwiper
            title={"New in: handpicked daily from the world's best brands & boutiques."}
            data={my_products}
            destination={"/New-In"}
        />
    </div>
  )
}

export default NewIn