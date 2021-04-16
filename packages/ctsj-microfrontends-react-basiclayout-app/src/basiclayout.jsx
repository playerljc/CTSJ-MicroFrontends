import React from 'react';
import { Menu } from 'antd';

import styles from './basiclayout.less';

/**
 * BasicLayout
 * @class BasicLayout
 * @classs BasicLayout
 */
class BasicLayout extends React.Component {
  ref = React.createRef();

  state = {
    collapsed: false,
  };

  render() {
    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <div className={styles.Menu}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item
                key="1"
                onClick={() => {
                  this.props.history.push('/system/menu');
                }}
              >
                菜单管理
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => {
                  this.props.history.push('/system/role');
                }}
              >
                角色管理
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  this.props.history.push('/system/department');
                }}
              >
                部门管理
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className={styles.Auto} ref={this.ref} />
      </div>
    );
  }
}

export default BasicLayout;
