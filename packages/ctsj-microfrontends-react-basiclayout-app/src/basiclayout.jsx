import React from 'react';

import styles from './basiclayout.less';

/**
 * BasicLayout
 * @class BasicLayout
 * @classs BasicLayout
 */
class BasicLayout extends React.Component {
  ref = React.createRef();

  render() {
    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <div className={styles.Menu}>
            <ul>
              <li>菜单管理</li>
              <li>角色管理</li>
              <li>部门管理</li>
            </ul>
          </div>
        </div>
        <div className={styles.Auto} ref={this.ref} />
      </div>
    );
  }
}

export default BasicLayout;
