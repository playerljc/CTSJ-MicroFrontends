import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index.js';

import App from './app';

const store = createStore(rootReducer);

/**
 * FlowData
 * @class FlowData
 * @classdesc FlowData
 */
class FlowData extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default FlowData;
