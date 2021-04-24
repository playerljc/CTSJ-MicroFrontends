import Vue from 'vue';
import Antd from 'ant-design-vue';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import BasicLayout from './basiclayout';

const { VueApp } = CtsjMicroFrontends;
let vueApp;

Vue.use(Antd);

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('basiclayout-vue', 'bootstrap');

    vueApp = new VueApp({
      component: BasicLayout,
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
    console.log('basiclayout-vue', 'mount');
    return vueApp.mount();
  },
  /**
   * update
   */
  update() {
    console.log('basiclayout-vue', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('basiclayout-vue', 'unmount');
    vueApp.unmount();
  },
  /**
   * getChild
   * @return {Vue | Element | Vue[] | Element[]}
   */
  getChild() {
    console.log('basiclayout-vue', 'getChild');

    console.log('basiclayout-vue-$refs', vueApp?.getIns()?.$refs);
    console.log('basiclayout-vue-$refs-children', vueApp?.getIns()?.$children[0].$refs?.children);

    return vueApp?.getIns()?.$children[0].$refs?.children;
  },
};
