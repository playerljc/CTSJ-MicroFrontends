// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Mixing from './mixing';

const { ReactApp } = CtsjMicroFrontends;
let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('react-mixing', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Mixing,
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
    console.log('react-mixing', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('react-mixing', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('react-mixing', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('react-mixing', 'getChild');

    return document.getElementById('react_mixing_children');
  },
};
