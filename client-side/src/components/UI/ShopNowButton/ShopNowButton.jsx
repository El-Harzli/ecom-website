import React from 'react'
import './ShopNowButton.css'
import { Link } from 'react-router-dom'

function ShopNowButton({destination}) {
  return (
    <Link to={destination} className="shop-button">Shop Now</Link>
  )
}

export default ShopNowButton