import React from 'react';
import PropTypes from 'prop-types';


function ShoppingListItem({ item, toggleDone }) {
  function onDone(e) {
    toggleDone(item, e.target.checked);
  }

  return (
    <li>
      <input type="checkbox" value={item.id} name={item.id} checked={item.done} onChange={onDone} />
      <label htmlFor={item.id}>
        { item.description }
      </label>
    </li>
  );
}

ShoppingListItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleDone: PropTypes.func,
};

ShoppingListItem.defaultProps = {
  toggleDone: () => {},
};

export default ShoppingListItem;
