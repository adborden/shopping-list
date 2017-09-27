import React from 'react';
import PropTypes from 'prop-types';

import ShoppingListItem from './shopping_list_item';


function ShoppingList({ items }) {
  return (
    <div>
      <h1>Shopping list</h1>
      <ul>
        { items.map(item => <ShoppingListItem item={item} />) }
      </ul>
    </div>
  );
}

ShoppingList.defaultProps = {
  items: [],
};

ShoppingList.propTypes = {
  items: PropTypes.array,
};

export default ShoppingList;
