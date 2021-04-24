import Vue from 'vue';
import Antd from 'ant-design-vue';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Role from './role';

const { VueApp } = CtsjMicroFrontends;
let vueApp;

Vue.use(Antd);

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('role-vue', 'bootstrap');

    vueApp = new VueApp({
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
    console.log('role-vue', 'mount');
    return vueApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('role-vue', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('role-vue', 'unmount');
    vueApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('role-vue', 'getChild');

    return null;
  },
};
