// eslint-disable-next-line max-classes-per-file
import React from 'react';
import ReactDOM from 'react-dom';

import type { IRegisterConfig, IProps, IComponentHOCProps } from './types';

/**
 * ReactApp - React组件
 * @class ReactApp
 * @classdesc ReactApp
 */
class ReactApp {
  private ref = React.createRef();

  private ins = React.createRef();

  // 子组件的类
  private readonly Component: React.ReactElement;

  // 挂载的html元素
  private readonly el: HTMLElement;

  // 路由组件的props
  private readonly props: IProps;

  // 当前路由的配置
  private readonly config: IRegisterConfig;

  // 刷新路由组件的方法
  private refresh: () => {};

  /**
   * constructor
   * @param component
   * @param el
   * @param props
   * @param config
   * @param refresh
   */
  constructor({ component, el, props, config, refresh }) {
    // 子组件
    this.Component = component;

    // 挂载的组件
    this.el = el;

    // 路由组件的props
    this.props = props;

    // 路由配置
    this.config = config;

    // 刷新
    this.refresh = refresh;
  }

  /**
   * ComponentHOC - 对组件进行包装
   * @return React.Component
   */
  private ComponentHOC(): React.Component {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    // @ts-ignore
    return class extends React.Component<IComponentHOCProps, any> {
      // componentDidMount() {
      //   console.log('ComponentHOC componentDidMount', self.ins);
      // }

      render() {
        // @ts-ignore
        return (
          // @ts-ignore
          <self.Component
            // @ts-ignore
            ref={self.ins}
            {...self.props}
            config={self.config}
            refresh={self.refresh}
          />
        );
      }
    };
  }

  /**
   * mount - 挂载
   * @return Promise
   */
  mount(): Promise<null> {
    return new Promise((resolve) => {
      // 对component进行的包装
      const App = this.ComponentHOC();

      // @ts-ignore
      ReactDOM.render(<App ref={this.ref} />, this.el, () => {
        resolve();
      });
    });
  }

  /**
   * update - 更新
   * @return Promise
   */
  update(): Promise<null> {
    // @ts-ignore
    return new Promise<null>((resolve) => {
      // @ts-ignore
      this.ref.current.forceUpdate(() => {
        resolve();
      });
    });
  }

  /**
   * unmount - 销毁
   * @return boolean
   */
  unmount(): boolean {
    return ReactDOM.unmountComponentAtNode(this.el);
  }

  /**
   * getIns
   */
  getIns(): any {
    return this?.ins?.current;
  }
}

export default ReactApp;
