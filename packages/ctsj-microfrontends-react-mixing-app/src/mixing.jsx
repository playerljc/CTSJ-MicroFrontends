import React from 'react';
import Router from './router';

import Context from './context';

import styles from './mixing.less';

/**
 * Mixing
 * @class Mixing
 * @classdesc Mixing
 */
class Mixing extends React.Component {
  getProvider() {
    return {
      push: (path) => {
        console.log('react-mixing-push', path);
        this.props.history.push(path);
      },
      replace: (path) => {
        this.props.history.replace(path);
      },
    };
  }

  render() {
    return (
      <Context.Provider value={this.getProvider()}>
        <div className={styles.Wrap}>{Router}</div>
      </Context.Provider>
    );
  }
}

export default Mixing;
