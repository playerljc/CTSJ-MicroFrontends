// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Login from './login';

const { ReactApp } = CtsjMicroFrontends;
let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('login', 'bootstrap');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Login,
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
    console.log('login', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('login', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('login', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('login', 'getChild');

    return null;
  },
};
