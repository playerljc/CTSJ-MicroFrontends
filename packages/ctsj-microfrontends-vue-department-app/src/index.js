import Vue from 'vue';
import Antd from 'ant-design-vue';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Department from './department';

const { VueApp } = CtsjMicroFrontends;
let vueApp;

Vue.use(Antd);

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('department-vue', 'bootstrap');

    vueApp = new VueApp({
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
    console.log('department-vue', 'mount');
    return vueApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('department-vue', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('department-vue', 'unmount');
    vueApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('department-vue', 'getChild');

    return null;
  },
};
