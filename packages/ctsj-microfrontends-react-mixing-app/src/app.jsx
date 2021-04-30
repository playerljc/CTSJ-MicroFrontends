import React from 'react';
import { Menu } from 'antd';
// import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Context from './context';

import styles from './app.less';

const {
  Emitter: { routerChangeEmitter },
  Actions: { ROUTER_CHANGE },
} = CtsjMicroFrontends;

/**
 * App
 * @class App
 * @classdesc App
 */
class App extends React.Component {
  selfRef = React.createRef();
  outRef = React.createRef();

  constructor(props) {
    super(props);

    this.onCtsjMicroFrontendsRouterChange = this.onCtsjMicroFrontendsRouterChange.bind(this);

    this.onLocationChange = this.onLocationChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      'React-componentWillReceiveProps',
      window.location.pathname,
      this.props.history,
      nextProps.history,
    );

    if (this?.preLocation?.pathname === window.location.pathname) {
      this.onLocationChange({ pathname: window.location.pathname });
    }
  }

  componentDidMount() {
    console.log('react-mixing-app-mount');
    this.unListen = this.props.history.listen(this.onLocationChange);
    routerChangeEmitter.on(ROUTER_CHANGE, this.onCtsjMicroFrontendsRouterChange);
  }

  componentWillUnmount() {
    console.log('react-mixing-app-componentWillUnmount');
    if (this.unListen) {
      this.unListen();
    }

    routerChangeEmitter.remove(ROUTER_CHANGE, this.onCtsjMicroFrontendsRouterChange);
  }

  onCtsjMicroFrontendsRouterChange(location) {
    console.log(
      'onCtsjMicroFrontendsRouterChange',
      location,
      this.selfRef.current,
      this.outRef.current,
    );
    this.selfRef.current.style.display = 'none';
    this.outRef.current.style.display = 'block';
  }

  onLocationChange(location) {
    console.log('onLocationChange', location, this.selfRef.current, this.outRef.current);
    this.preLocation = location;
    this.selfRef.current.style.display = 'block';
    this.outRef.current.style.display = 'none';
  }

  render() {
    return (
      <Context.Consumer>
        {({ push }) => {
          return (
            <div className={styles.Wrap}>
              <div className={styles.Fixed}>
                <Menu mode="horizontal">
                  <Menu.Item
                    key="self1"
                    onClick={() => {
                      this.props.history.push('/react_mixing/self1');
                    }}
                  >
                    self1
                  </Menu.Item>
                  <Menu.Item
                    key="self2"
                    onClick={() => {
                      this.props.history.push('/react_mixing/self2');
                    }}
                  >
                    self2
                  </Menu.Item>

                  <Menu.Item
                    key="react_sub_mixing"
                    onClick={() => {
                      push('/react_mixing/react_sub_mixing');
                    }}
                  >
                    react_sub_mixing
                  </Menu.Item>
                  <Menu.Item
                    key="vue_sub_mixing"
                    onClick={() => {
                      push('/react_mixing/vue_sub_mixing');
                    }}
                  >
                    vue_sub_mixing
                  </Menu.Item>
                </Menu>
              </div>
              <div className={styles.Auto} ref={this.selfRef}>
                {this.props.children}
              </div>
              <div
                className={styles.Auto}
                id="react_mixing_children"
                style={{ display: 'none' }}
                ref={this.outRef}
              />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default App;
