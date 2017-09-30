import React from 'react';
import PropTypes from 'prop-types';


function ShoppingListItem({ item, toggleDone, onReorder }) {
  function onDone(e) {
    toggleDone(item, e.target.checked);
  }

  function onDragStart(e) {
    e.dataTransfer.setData('text/plain', item.id);
    e.dataTransfer.dropEffect = 'move';
  }

  function onDrop(e) {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text');
    if (itemId == item.id) {
      return;
    }

    onReorder(itemId, item.id);
  }

  function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }


  const classes = ['list-item'];
  if (item.done) {
    classes.push('done');
  }

  return (
    <li
      className={classes.join(' ')}
      draggable="true"
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <input type="checkbox" value={item.id} name={item.id} checked={item.done} onChange={onDone} />
      <label htmlFor={item.id}>
        { item.description }
      </label>
    </li>
  );
}

ShoppingListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onReorder: PropTypes.func,
  toggleDone: PropTypes.func,
};

ShoppingListItem.defaultProps = {
  onReorder: () => {},
  toggleDone: () => {},
};

export default ShoppingListItem;
