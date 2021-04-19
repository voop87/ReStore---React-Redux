import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header';
import HomePage from '../pages/home-page';
import CatalogPage from '../pages/catalog-page';
import CartPage from '../pages/cart-page';


const App = () => {
  return (
    <div className='container'>
      <Header />

      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/catalog' component={CatalogPage} />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;