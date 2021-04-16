// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import ReactApp from '@ctsj/microfrontends/lib/reactAppFactory';

import Frame from './frame';

let reactApp;

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('app', 'bootstrap');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactApp = new ReactApp({
      component: Frame,
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
    console.log('app', 'mount');
    return reactApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('app', 'update');
    reactApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('app', 'unmount');
    reactApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('app', 'getChild', reactApp, reactApp.getIns());

    return reactApp?.getIns()?.ref?.current;
  },
};
