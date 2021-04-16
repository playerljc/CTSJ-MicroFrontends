// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import ReactApp from '@ctsj/microfrontends/lib/reactAppFactory';

import SystemSetting from './systemsetting';

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('systemsetting', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: SystemSetting,
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
    console.log('systemsetting', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('systemsetting', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('systemsetting', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('systemsetting', 'getChild');

    return null;
  },
};
