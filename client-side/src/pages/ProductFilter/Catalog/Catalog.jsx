import React from 'react'
import './Catalog.css'
import Product from '@UI/Product/Product.jsx'
import {my_products} from '@assets/all_product.js'

function Catalog() {
  return (
    <div className='catalog'>
      {
        my_products.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Catalog