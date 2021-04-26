// eslint-disable-next-line max-classes-per-file
import Vue from 'vue';

import type { IRegisterConfig, IProps } from '../types';

/**
 * VueApp - Vue组件
 * @class VueApp
 * @classdesc VueApp
 */
class VueApp {
  // 子组件的类
  private readonly Component: any;

  // 挂载的html元素
  private readonly el: HTMLElement;

  // 路由组件的props
  private readonly props: IProps;

  // 当前路由的配置
  private readonly config: IRegisterConfig;

  // 刷新路由组件的方法
  private refresh: () => {};

  private ins: Vue | undefined;

  private mountEl: HTMLElement | null = null;

  private mountWrapEl: HTMLElement | null = null;

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

    this.createMountEl();
  }

  /**
   * createMountEl - 创建挂载的el
   */
  createMountEl(): void {
    this.mountWrapEl = document.createElement('div');
    this.mountWrapEl.className = 'ctsj_microfrontends_vueapp_mount_warapel';
    this.mountWrapEl.style.width = '100%';
    this.mountWrapEl.style.height = '100%';
    this.mountWrapEl.style.padding = '0';
    this.mountWrapEl.style.margin = '0';

    this.mountEl = document.createElement('div');
    this.mountEl.className = 'ctsj_microfrontends_vueapp_mountel';
    this.mountEl.style.width = '100%';
    this.mountEl.style.height = '100%';
    this.mountEl.style.padding = '0';
    this.mountEl.style.margin = '0';

    this.mountWrapEl.appendChild(this.mountEl);
    this.el.appendChild(this.mountWrapEl);
  }

  /**
   * mount - 挂载
   * @param config - vue的配置对象
   * @return Promise
   */
  mount(config = {}): Promise<null> {
    return new Promise((resolve) => {
      this.ins = new Vue({
        ...(config || {}),
        render: (createElement) =>
          createElement(this.Component, {
            props: {
              routerProps: { ...this.props },
              config: this.config,
              refresh: this.refresh,
            },
          }),
        mounted() {
          // @ts-ignore
          if (config.mounted) {
            // @ts-ignore
            config.mounted();
          }
          resolve();
        },
      });

      // @ts-ignore
      this.ins.$mount(this.mountEl);
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
      this.ins.$forceUpdate();
      resolve();
    });
  }

  /**
   * unmount - 销毁
   * @return boolean
   */
  unmount(): boolean {
    // @ts-ignore
    this.ins.$destroy();
    this.mountWrapEl?.parentElement?.removeChild(this.mountWrapEl);
    return true;
  }

  /**
   * getIns
   */
  getIns(): any {
    return this?.ins;
  }
}

export default VueApp;
