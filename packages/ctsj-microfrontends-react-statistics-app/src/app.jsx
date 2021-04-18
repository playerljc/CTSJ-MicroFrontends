import React from 'react';
import { Menu } from 'antd';

import styles from './app.less';

/**
 * Statistics
 * @class Statistics
 * @classdesc Statistics
 */
class Statistics extends React.Component {
  render() {
    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <Menu mode="horizontal">
            <Menu.Item
              key="11"
              onClick={() => {
                this.props.history.push('/system/statistics/total');
              }}
            >
              汇总统计
            </Menu.Item>
            <Menu.Item
              key="22"
              onClick={() => {
                this.props.history.push('/system/statistics/person');
              }}
            >
              人员统计
            </Menu.Item>
            <Menu.Item
              key="33"
              onClick={() => {
                this.props.history.push('/system/statistics/department');
              }}
            >
              部门统计
            </Menu.Item>
          </Menu>
        </div>
        <div className={styles.Auto}>{this.props.children}</div>
      </div>
    );
  }
}

export default Statistics;
