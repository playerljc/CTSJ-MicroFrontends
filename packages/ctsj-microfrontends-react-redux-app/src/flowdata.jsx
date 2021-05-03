import React from 'react';

// provider
import { Provider } from 'react-redux';

// createStore
import { createStore } from 'redux';

// reducer
import reducer from './reducers/index.js';

// 默认值
import CtsjMicroFrontends from 'CtsjMicroFrontends';

import App from './app';

const { Flow } = CtsjMicroFrontends;
const store = createStore(reducer, Flow.getStore());

/**
 * FlowData
 * @class FlowData
 * @classdesc FlowData
 */
class FlowData extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange() {
    console.log('handleChange', store.getState());
    Flow.triggerFlowChange(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default FlowData;
