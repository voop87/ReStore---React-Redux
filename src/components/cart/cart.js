import React from 'react';
import { Link } from 'react-router-dom';

import './cart.css';

const Cart = ({ numItems, totalPrice }) => {
  return (
    <div className='cart'>
      <Link className='cart__link' to='/cart'>
        <i className="fa fa-shopping-cart"></i>
      </Link>
      <span className='cart__volume'>{numItems} items</span>
      <span className='cart__total'>(${totalPrice})</span>
    </div>
  );
};

export default Cart;