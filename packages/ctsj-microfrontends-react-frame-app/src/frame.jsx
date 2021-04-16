import React from 'react';

import styles from './frame.less';

/**
 * Frame
 * @class Frame
 * @classs Frame
 */
class Frame extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    console.log('Frame componentDidMount');
  }

  render() {
    console.log('Frame Render');

    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <div className={styles.Logo}>Logo</div>
          <div className={styles.Menu}>
            <ul>
              <li>用户管理</li>
              <li>系统管理</li>
              <li>系统设置</li>
            </ul>
          </div>
          <div className={styles.Right}>Right</div>
        </div>
        <div className={styles.Auto} ref={this.ref} />
      </div>
    );
  }
}

export default Frame;
