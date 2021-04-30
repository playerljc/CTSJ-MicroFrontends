import Vue from 'vue';
import Antd from 'ant-design-vue';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import SubMixing from './submixing';

const { VueApp } = CtsjMicroFrontends;
let vueApp;

Vue.use(Antd);

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('sub-mixing', 'bootstrap');

    vueApp = new VueApp({
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
    return vueApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('sub-mixing', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('sub-mixing', 'unmount');
    vueApp.unmount();
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
