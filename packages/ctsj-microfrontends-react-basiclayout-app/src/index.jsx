// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import BasicLayout from './basiclayout';

const { ReactApp } = CtsjMicroFrontends;

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('basiclayout', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: BasicLayout,
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
    console.log('basiclayout', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('basiclayout', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('basiclayout', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('basiclayout', 'getChild');

    return reactApp?.getIns()?.ref?.current;
  },
};
