import React from 'react';

import { connect } from 'react-redux';

/**
 * App
 * @class App
 * @classdesc App
 */
class App extends React.Component {
  render() {
    return <div>App</div>;
  }
}

const mapStateToProps = (state) =>
  Object.assign(
    ServiceRegister.mapStateToProps({
      namespaces: [serviceName],
      state,
    }),
    {
      loading: state.loading,
    },
  );

const mapDispatchToProps = (dispatch) =>
  ServiceRegister.mapDispatchToProps({
    namespaces: [serviceName],
    dispatch,
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);
