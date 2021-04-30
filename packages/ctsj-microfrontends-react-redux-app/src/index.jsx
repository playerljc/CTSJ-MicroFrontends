// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import FlowData from './flowdata';

const { ReactApp } = CtsjMicroFrontends;
let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('react-redux', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: FlowData,
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
    console.log('react-redux', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('react-redux', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('react-redux', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('react-redux', 'getChild');

    return null;
  },
};
