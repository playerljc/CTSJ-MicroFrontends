import React from 'react';
import Router from './router';

import styles from './statistics.less';

/**
 * Statistics
 * @class Statistics
 * @classdesc Statistics
 */
class Statistics extends React.Component {
  render() {
    return <div className={styles.Wrap}>{Router}</div>;
  }
}

export default Statistics;
