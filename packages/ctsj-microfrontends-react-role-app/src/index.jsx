// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import ReactApp from '@ctsj/microfrontends/lib/reactAppFactory';

import Role from './role';

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('role', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Role,
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
    console.log('role', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('role', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('role', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('role', 'getChild');

    return null;
  },
};
