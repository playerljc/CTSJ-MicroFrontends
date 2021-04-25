import React from 'react';
import type { IRegisterConfig, IProps, ILocation } from './types';
import Skeleton from 'react-loading-skeleton';

import Context from './context';
import { routerChangeEmitter } from './emitter';
import { ROUTER_CHANGE } from './actions';

/**
 * loadScript - 加载script脚本
 * @param script
 * @return Promise
 */
function loadScript(script: string): Promise<null> {
  return new Promise<null>((resolve) => {
    const el = document.createElement('script');
    el.addEventListener('load', () => {
      resolve();
    });
    el.src = script;
    document.getElementsByTagName('head')[0].appendChild(el);
  });
}

/**
 * loadLink - 加载css文件
 * @param link
 * @return Promise
 */
function loadLink(link: string): Promise<null> {
  return new Promise<null>((resolve) => {
    const el = document.createElement('link');
    el.setAttribute('rel', 'stylesheet');
    el.addEventListener('load', () => {
      resolve();
    });
    el.href = link;
    document.getElementsByTagName('head')[0].appendChild(el);
  });
}

// @ts-ignore
/**
 * loadRemoteResource - 加载远程所有的脚本和样式资源
 * @param scripts
 * @param links
 * @return Promise
 */
function loadRemoteResource({
  scripts,
  links,
}: {
  scripts: string[];
  links: string[];
}): Promise<null> {
  // @ts-ignore
  return Promise.all(
    [].concat(
      // @ts-ignore
      (scripts || []).map((script: string) => loadScript(script)),
      (links || []).map((link: string) => loadLink(link)),
    ),
  );
}

/**
 * createComponent - 创建路由组件
 * @param config
 * @param container
 * @return React.ReactElement
 */
export function createComponent(
  config: IRegisterConfig,
  container: HTMLElement,
): React.ReactElement {
  /**
   * RouterComponent - 路由组件
   * @class RouterComponent
   * @classdesc RouterComponent
   */
  // @ts-ignore
  return class RouterComponent extends React.Component<IProps, { isReady: boolean }> {
    private el: HTMLElement | null = null;

    private lock: boolean = false;

    // @ts-ignore
    private unListen: any;

    // 之前变化的location
    private preChangeLocation: null | ILocation = null;

    constructor(props) {
      super(props);

      this.state = {
        isReady: false,
      };

      // 路由发生变化的回调
      this.onLocationChange = this.onLocationChange.bind(this);

      this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
      // 1.接收到props中的history对象
      const { history } = this.props;

      // 2. 使用history的listen方法添加自定义监听事件 参数为一个回调函数 即：路由改变之后执行的方法
      this.unListen = history.listen(this.onLocationChange);

      const { name } = config;

      // 如果没有加载远程资源，则加载远程资源
      // @ts-ignore
      if (!window[name]) {
        const { scripts, links } = config;

        loadRemoteResource({
          scripts,
          // @ts-ignore
          links,
        }).then(() => {
          // @ts-ignore
          window[name]?.bootstrap({
            props: this.props,
            config,
            el: this.el || container,
            refresh: this.refresh,
          });

          // @ts-ignore
          window[name]?.mount()?.then(() => {
            this.setState({
              isReady: true,
            });
          });
        });
      }
      // 加载过远程资源
      else {
        // @ts-ignore
        window[name]?.bootstrap({
          props: this.props,
          config,
          el: this.el || container,
          refresh: this.refresh,
        });

        // @ts-ignore
        window[name]?.mount()?.then(() => {
          this.setState({
            isReady: true,
          });
        });
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    componentDidUpdate(prevProps: IProps, prevState: Readonly<any>, snapshot?: any) {
      console.log('prevState.isReady', prevState.isReady);
      console.log('this.state.isReady', this.state.isReady);

      const { lock } = this;

      if (lock) {
        this.lock = false;
      } else if (prevState.isReady === this.state.isReady) {
        const { name } = config;

        // @ts-ignore
        window[name]?.update(prevProps, this.props);
      }
    }

    componentWillUnmount() {
      this.unListen();

      const { name } = config;

      // @ts-ignore
      window[name]?.unmount();
    }

    /**
     * refresh - 刷新
     */
    refresh() {
      // 加锁防止自己被update
      this.lock = true;

      this.forceUpdate();
    }

    /**
     * onLocationChange - 路由改变之后执行的方法
     * @param location
     */
    onLocationChange(location: ILocation) {
      if (!this.preChangeLocation) {
        this.preChangeLocation = location;
        routerChangeEmitter.trigger(ROUTER_CHANGE, location);
      } else if (this.preChangeLocation.pathname !== location.pathname) {
        this.preChangeLocation = location;
        routerChangeEmitter.trigger(ROUTER_CHANGE, location);
      }
    }

    render() {
      const { name } = config;

      const { isReady } = this.state;

      const { children } = this.props;

      return (
        <Context.Consumer>
          {(el) => {
            this.el = el;

            return (
              <Context.Provider value={window[name]?.getChild()}>
                {isReady && window[name] ? children : <Skeleton />}
              </Context.Provider>
            );
          }}
        </Context.Consumer>
      );
    }
  };
}
