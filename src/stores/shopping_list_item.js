import { Store } from 'flux/utils';

import { types } from '../actions';


function initialState() {
  return {
    listItems: [],
    counter: 0,
  };
}

class ShoppingListItemStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);

    this.state = initialState();
    this.storage = window.localStorage;
  }

  load() {
    const state = this.storage.getItem('ShoppingListItemStore');
    if (state) {
      this.state = JSON.parse(state);
    } else {
      this.state = initialState();
    }
  }

  save() {
    window.localStorage.setItem('ShoppingListItemStore', JSON.stringify(this.state));
  }

  get(id) {
    return this.state.listItems.find(item => item.id === id);
  }

  nextId() {
    this.state.counter += 1;
    return this.state.counter;
  }

  getState() {
    // TODO use immutable.js so state change detection works properly
    return Object.assign({}, this.state);
  }

  __onDispatch(payload) {
    switch (payload.type) {
      case types.LIST_ITEM_ADD: {
        const { description } = payload;
        const item = {
          description,
          id: this.nextId(),
          done: false,
        };
        this.state.listItems.unshift(item);
        this.__emitChange();
        break;
      }

      case types.LIST_ITEM_REMOVE: {
        const removed = this.state.listItems.remove(payload.item);
        if (removed) {
          this.__emitChange();
        }
        break;
      }

      case types.LIST_ITEM_DO: {
        const { item, undo } = payload;
        const todo = this.state.listItems.find(element => item.id === element.id);
        todo.done = !undo;
        this.__emitChange();
        break;
      }

      case types.LIST_ITEM_MOVE: {
        const { from, to } = payload; // these are ids, not positions
        const fromIdx = this.state.listItems.findIndex(item => item.id === from);
        let toIdx = this.state.listItems.findIndex(item => item.id === to);
        if (fromIdx < toIdx) {
          toIdx -= 1;
        }

        const [item] = this.state.listItems.splice(fromIdx, 1);
        this.state.listItems.splice(toIdx, 0, item);
        this.__emitChange();
        break;
      }

      default:
        break;
    }

    this.save();
  }
}

export default ShoppingListItemStore;
