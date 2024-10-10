import React from 'react';
import './MainNavbar.css';
import { Link } from 'react-router-dom';


import WishlistIcon from '../../UI/WishlistIcon/WishlistIcon';


function MainNavbar({ setIsSearchbarMenuActive, setIsSecondaryNavbarActive }) {

  const menuClickHandler = () => {
    setIsSecondaryNavbarActive(true);
  };

  return (
    <nav className="main-navbar">
      <div className="left-side">
        <span onClick={menuClickHandler} className="icon icon-hamburger">
          <i className="bx bx-menu"></i>
        </span>
        <span className="icon icon-search" onClick={() => setIsSearchbarMenuActive(true)}>
          <i className="bx bx-search"></i>
        </span>
      </div>
      <div className="logo">
        <Link to={'/'}>KERIZIA</Link>
      </div>
      <div className="right-side">
        <Link to={'/favorite-products'}> <WishlistIcon type={'nav'} /> </Link>
        <span className="icon icon-cart">
          <i className="bx bx-shopping-bag"></i>
        </span>
      </div>
    </nav>
  );
}

export default MainNavbar;
