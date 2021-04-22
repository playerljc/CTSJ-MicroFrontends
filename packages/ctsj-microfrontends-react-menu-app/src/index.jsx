// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Menu from './menu';

const { ReactApp } = CtsjMicroFrontends;

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('menu', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Menu,
      el,
      props,
      config,
      refresh,
    });
  },
  /**
   * mount
   * @return {Promise<unknown>}
   */
  mount() {
    console.log('menu', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('menu', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('menu', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('menu', 'getChild');

    return null;
  },
};
