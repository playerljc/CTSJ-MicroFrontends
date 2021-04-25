import Vue from 'vue';
import VueRouter from 'vue-router';
import Antd from 'ant-design-vue';
import CtsjMicroFrontends from 'CtsjMicroFrontends';

import Statistics from './statistics';
import StatisticsTotal from './StatisticsTotal';
import StatisticsPerson from './StatisticsPerson';
import StatisticsDepartment from './StatisticsDepartment';

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
  console.log('onRouterChange', location, vueApp, vueApp.getIns().$router);
  vueApp.getIns().$router.push(location.pathname);
};

export default {
  /**
   * bootstrap
   */
  bootstrap({ el, refresh, config, props }) {
    console.log('statistics-vue', 'bootstrap');

    router = new VueRouter({
      mode: 'history',
      routes: [
        {
          path: '/vue_system/vue_statistics',
          redirect: '/vue_system/vue_statistics/total',
        },
        {
          // 汇总统计
          path: '/vue_system/vue_statistics/total',
          component: StatisticsTotal,
        },
        {
          // 人员统计
          path: '/vue_system/vue_statistics/person',
          component: StatisticsPerson,
        },
        {
          // 部门统计
          path: '/vue_system/vue_statistics/department',
          component: StatisticsDepartment,
        },
      ],
    });

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
    return vueApp.mount({
      router,
      mounted: function () {
        // console.log('onRouterChangemounted', ROUTER_CHANGE, this, this.onRouterChange);
        routerChangeEmitter.on(ROUTER_CHANGE, onRouterChange);
      },
      destroyed: function () {
        routerChangeEmitter.remove(ROUTER_CHANGE, onRouterChange);
      },
      // methods: {
      //   onRouterChange: function (location) {
      //     console.log('onRouterChange', location, this, this.router);
      //     this.router.push(location.pathname);
      //   },
      // },
    });
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
