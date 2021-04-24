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
              <li
                onClick={() => {
                  this.props.history.push('/user');
                }}
              >
                用户管理(React)
              </li>
              <li
                onClick={() => {
                  this.props.history.push('/system');
                }}
              >
                系统管理(React)
              </li>
              <li
                onClick={() => {
                  this.props.history.push('/setting');
                }}
              >
                系统设置(React)
              </li>

              <li
                onClick={() => {
                  this.props.history.push('/vue_user');
                }}
              >
                用户管理(Vue)
              </li>
              <li
                onClick={() => {
                  this.props.history.push('/vue_system');
                }}
              >
                系统管理(Vue)
              </li>
              <li
                onClick={() => {
                  this.props.history.push('/vue_setting');
                }}
              >
                系统设置(Vue)
              </li>
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
