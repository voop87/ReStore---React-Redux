import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, imageURL } = book;

  return (
    <React.Fragment>
      <div className='card'>
        <img className='card__img' src={imageURL} width='50' height='75' alt='book cover'/>
        <div className='card__info'>
          <h3 className='card__title'>{title}</h3>
          <cite className='card__author'>by {author}</cite>
          <span className='card__price'>${price}</span>
          <button 
            className='card__btn btn btn-primary'
            type='button'
            onClick={onAddedToCart}>Add to cart</button>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default BookListItem;