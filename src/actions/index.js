
const types = {
  LIST_ITEM_ADD: 'LIST_ITEM_ADD',
  LIST_ITEM_DO: 'LIST_ITEM_DO',
  LIST_ITEM_REMOVE: 'LIST_ITEM_REMOVE',
  LIST_ITEM_MOVE: 'LIST_ITEM_MOVE',
};

function ListItem({ dispatcher }) {
  return {
    addListItem(description) {
      dispatcher.dispatch({
        type: types.LIST_ITEM_ADD,
        description,
      });

      return Promise.resolve(description);
    },

    removeListItem(item) {
      dispatcher.dispatch({
        type: types.LIST_ITEM_REMOVE,
        item,
      });

      return Promise.resolve(item);
    },

    doListItem(item, undo = false) {
      dispatcher.dispatch({
        type: types.LIST_ITEM_DO,
        item,
        undo,
      });

      // TODO This doesn't seem quite right, maybe fetch from the store?
      return Promise.resolve(!undo);
    },

    moveListItem(from, to) {
      dispatcher.dispatch({
        type: types.LIST_ITEM_MOVE,
        from,
        to,
      });

      return Promise.resolve();
    },
  };
}

export {
  types,
  ListItem,
};
