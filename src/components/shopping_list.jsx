import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dispatcher } from 'flux';
import { Container } from 'flux/utils';

import ShoppingListItem from './shopping_list_item';
import { ListItem } from '../actions';
import { ShoppingListItemStore } from '../stores';

const dispatcher = new Dispatcher();
const listItem = ListItem({ dispatcher });
const shoppingListItemStore = new ShoppingListItemStore(dispatcher);
shoppingListItemStore.load();


function addItem(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  listItem.addListItem(data.get('description'));
  e.target.reset();
}

function toggleDone(item, done) {
  listItem.doListItem(item, !done);
}

class ShoppingList extends Component {
  static getStores() {
    return [shoppingListItemStore];
  }

  static calculateState() {
    return {
      shoppingList: shoppingListItemStore.getState(),
    };
  }

  render() {
    return (
      <div>
        <h1>Shopping list</h1>
        <form onSubmit={addItem}>
          <label htmlFor="description">Add item</label>
          <input type="text" name="description" placeholder="Add an item…" />
        </form>
        <ul>
          {
            this.state.shoppingList.listItems.map(
              item => <ShoppingListItem key={item.id} item={item} toggleDone={toggleDone} />,
            )
          }
        </ul>
      </div>
    );
  }
}

export default Container.create(ShoppingList);
