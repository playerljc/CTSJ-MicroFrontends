export default (state = [], action) => {
  console.log('reducers', state, action, action.type);

  switch (action.type) {
    case 'add': {
      state.push(action.data);
      return [].concat(state);
    }
    case 'modify': {
      // eslint-disable-next-line no-return-assign,no-param-reassign
      const index = state.findIndex((t) => t.id === action.data.id);
      // eslint-disable-next-line no-param-reassign
      state[index] = action.data;
      return [].concat(state);
    }
    case 'remove': {
      // eslint-disable-next-line no-return-assign,no-param-reassign
      const index = state.findIndex((t) => t.id === action.id);
      state.splice(index, 1);
      return [].concat(state);
    }
    case 'list':
      return [].concat(state);
    default:
      return [].concat(state);
  }
};
