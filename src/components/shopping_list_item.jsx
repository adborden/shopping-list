import React from 'react';
import PropTypes from 'prop-types';

function ShoppingListItem({ item }) {
  return (
    <li>
      <input type="checkbox" value={item.id} name={item.id} />
      <label htmlFor={item.id}>
        { item.name }
      </label>
    </li>
  );
}

ShoppingListItem.propTypes = {
  item: PropTypes.object,
};

ShoppingListItem.defaultProps = {
};

export default ShoppingListItem;
