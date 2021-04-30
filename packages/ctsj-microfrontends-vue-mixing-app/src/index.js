import Vue from 'vue';
import VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import CtsjMicroFrontends from 'CtsjMicroFrontends';

import App from './app';
import Self1 from './self1';
import Self2 from './self2';

Vue.use(VueRouter);

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;

//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const {
  Emitter: { routerChangeEmitter },
  Actions: { ROUTER_CHANGE },
} = CtsjMicroFrontends;

const { VueApp } = CtsjMicroFrontends;
let vueApp;
let router;

Vue.use(Antd);

let onRouterChange = (location) => {
  // vueApp.getIns().$router.push(location.pathname);
  console.log('onRouterChange', location);
  if (vueApp.getIns() && vueApp.getIns().$children && vueApp.getIns().$children.length) {
    vueApp.getIns().$children[0].$refs.selfRef.style.display = 'none';
    vueApp.getIns().$children[0].$refs.outRef.style.display = 'block';
  }
};

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('vue-mixing', 'bootstrap');

    router = new VueRouter({
      mode: 'history',
      routes: [
        {
          path: '/vue_mixing',
          redirect: '/vue_mixing/self1',
        },
        {
          // 汇总统计
          path: '/vue_mixing/self1/:token?',
          component: Self1,
        },
        {
          // 人员统计
          path: '/vue_mixing/self2/:token?',
          component: Self2,
        },
      ],
    });

    router.afterEach((form, to) => {
      console.log('beforeRouteUpdate', form, to);
      if (vueApp.getIns() && vueApp.getIns().$children && vueApp.getIns().$children.length) {
        vueApp.getIns().$children[0].$refs.selfRef.style.display = 'block';
        vueApp.getIns().$children[0].$refs.outRef.style.display = 'none';
      }
    });

    vueApp = new VueApp({
      component: App,
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
    console.log('vue-mixing', 'mount');
    return vueApp.mount({
      router,
      beforeUpdate: function () {
        console.log('Vue-beforeUpdate', window.location.pathname, vueApp.getIns().$route.path);
        onRouterChange({ pathname: vueApp.getIns().$route.path });
      },
      mounted: function () {
        console.log('vue-mixing-mounted');
        routerChangeEmitter.on(ROUTER_CHANGE, onRouterChange);
      },
      destroyed: function () {
        console.log('vue-mixing-destroyed');
        routerChangeEmitter.remove(ROUTER_CHANGE, onRouterChange);
      },
    });
  },
  /**
   * update
   */
  update() {
    console.log('vue-mixing', 'update');
    vueApp.update();
  },
  /**
   * unmount
   */
  unmount() {
    console.log('vue-mixing', 'unmount');
    vueApp.unmount();
  },
  /**
   * getChild
   * @return {null}
   */
  getChild() {
    console.log('vue-mixing', 'getChild');

    return document.getElementById('vue_mixing_children');
  },
};
