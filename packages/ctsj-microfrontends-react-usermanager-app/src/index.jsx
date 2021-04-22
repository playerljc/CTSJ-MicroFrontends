// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import UserManager from './usermanager';

const { ReactApp } = CtsjMicroFrontends;
let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('usermanager', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: UserManager,
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
    console.log('usermanager', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('usermanager', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('usermanager', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('usermanager', 'getChild');

    return null;
  },
};
