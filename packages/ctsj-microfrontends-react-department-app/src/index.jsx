// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import ReactApp from '@ctsj/microfrontends/lib/reactAppFactory';

import Department from './department';

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('department', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Department,
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
    console.log('department', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('department', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('department', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('department', 'getChild');

    return null;
  },
};
