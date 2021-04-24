import Vue from 'vue';
import Antd from 'ant-design-vue';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Statistics from './statistics';

const { VueApp } = CtsjMicroFrontends;
let vueApp;

Vue.use(Antd);

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('statistics-vue', 'bootstrap');

    vueApp = new VueApp({
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
    console.log('statistics-vue', 'mount');
    return vueApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('statistics-vue', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('statistics-vue', 'unmount');
    vueApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('statistics-vue', 'getChild');

    return null;
  },
};
