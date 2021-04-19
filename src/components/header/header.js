import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../main-nav';
import Cart from '../cart';
import { connect } from 'react-redux';

import './header.css';

const Header = ({ numItems, totalPrice }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <Link className='header__link' to='/'>ReStore</Link>
      </h1>
      <MainNav />
      <Cart numItems={numItems} totalPrice={totalPrice} />
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    numItems: cartItems.length,
    totalPrice: orderTotal
  }
};

export default connect(mapStateToProps)(Header);