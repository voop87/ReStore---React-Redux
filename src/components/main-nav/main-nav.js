import React from 'react';
import { Link } from 'react-router-dom';

import './main-nav.css';

const MainNav = () => {
  return (
    <nav className='main-nav'>
      <ul className='main-nav__list'>
        <li>
          <Link className='main-nav__link' to='/catalog'>Catalog</Link>
        </li>
        <li>
          <Link className='main-nav__link' to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;