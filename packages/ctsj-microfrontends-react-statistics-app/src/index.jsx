// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Statistics from './statistics';

const { ReactApp } = CtsjMicroFrontends;
let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('statistics', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Statistics,
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
    console.log('statistics', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('statistics', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('statistics', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('statistics', 'getChild');

    return null;
  },
};
