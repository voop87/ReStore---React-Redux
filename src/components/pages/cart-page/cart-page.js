import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../../actions';

import './cart-page.css';

const CartPage = ({ items, orderTotal, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            className='table__action-btn btn btn-warning'
            type='button'
            onClick={() => onDecrease(id)}>
            <i className='fa fa-minus-circle'></i>
          </button>
          <button
            className='table__action-btn btn btn-success'
            type='button'
            onClick={() => onIncrease(id)}>
            <i className='fa fa-plus-circle'></i>
          </button>
          <button
            className='table__action-btn btn btn-danger'
            type='button'
            onClick={() => onDelete(id)}>
            <i className='fa fa-trash'></i>
          </button>
        </td>
      </tr>
    );
  }
  return (
    <section className='cart-page'>
      <h2 className='cart-page__title'>Your Order</h2>
      <table className='cart-page__table table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
        <tfoot>
          <tr>
            <td className='table__total' colSpan='5'>Total: ${orderTotal}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    orderTotal: orderTotal
  }
};

const mapDispatchToProps = {
  onDecrease: bookRemovedFromCart,
  onIncrease: bookAddedToCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage); 