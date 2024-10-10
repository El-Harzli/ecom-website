import React from 'react'
import './ProductFilter.css'
import CatalogActions from './/CatalogActions/CatalogActions'
import Catalog from './/Catalog/Catalog'

function ProductFilter() {
  return (
    <div className='product-filter'>
        <CatalogActions />
        <Catalog />
    </div>
  )
}

export default ProductFilter