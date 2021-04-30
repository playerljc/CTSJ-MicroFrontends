// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import SubMixing from './submixing';

const { ReactApp } = CtsjMicroFrontends;

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('sub-mixing', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: SubMixing,
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
    console.log('sub-mixing', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('sub-mixing', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('sub-mixing', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('sub-mixing', 'getChild');

    return null;
  },
};
