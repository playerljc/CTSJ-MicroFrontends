import React from 'react';
import type { IRegisterConfig, IProps } from './types';
import Skeleton from 'react-loading-skeleton';

import Context from './context';

/**
 * loadScript
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
 * loadLink
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
 * loadRemoteResource - 加载远程资源
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
 * createComponent
 * @param config
 * @param container
 * @return React.ReactElement
 */
export function createComponent(
  config: IRegisterConfig,
  container: HTMLElement,
): React.ReactElement {
  // @ts-ignore
  return class ComponentWrap extends React.Component<IProps, { isReady: boolean }> {
    private el: HTMLElement | null = null;

    private lock: boolean = false;

    // @ts-ignore
    private unListen: any;

    constructor(props) {
      super(props);

      this.state = {
        isReady: false,
      };

      this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
      // 1.接收到props中的history对象
      const { history } = this.props;
      // 2. 使用history的listen方法添加自定义监听事件 参数为一个回调函数 即：路由改变之后执行的方法
      this.unListen = history.listen((location) => {
        console.log('pathChange', location);
      });

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
