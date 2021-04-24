import Vue from 'vue';
import Antd from 'ant-design-vue';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Menu from './menu';

const { VueApp } = CtsjMicroFrontends;
let vueApp;

Vue.use(Antd);

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('menu-vue', 'bootstrap');

    vueApp = new VueApp({
      component: Menu,
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
    console.log('menu-vue', 'mount');
    return vueApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('menu-vue', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('menu-vue', 'unmount');
    vueApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('menu-vue', 'getChild');

    return null;
  },
};
