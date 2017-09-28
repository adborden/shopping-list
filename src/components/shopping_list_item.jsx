import React from 'react';
import PropTypes from 'prop-types';


function ShoppingListItem({ item, toggleDone }) {
  function onDone(e) {
    toggleDone(item, e.target.checked);
  }

  const classes = ['list-item'];
  if (item.done) {
    classes.push('done');
  }

  return (
    <li className={classes.join(' ')}>
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
