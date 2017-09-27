import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShoppingList from './components/shopping_list';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={ShoppingList} />
  </Router>,
  document.getElementById('react-shopping-app'),
);
