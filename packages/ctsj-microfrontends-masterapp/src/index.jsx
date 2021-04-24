// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import CtsjMicroFrontends from 'CtsjMicroFrontends';

import './index.less';

const { register, start } = CtsjMicroFrontends;
const context = 'http://localhost:8080/assets';

/**
 * 路由注册
 */
const config = [
  {
    // 登陆
    path: '/login',
    name: '$login',
    scripts: [`${context}/$login.bundle.js`],
    links: [`${context}/$login.min.css`],
  },
  {
    // 主页
    path: '/',
    name: '$app',
    scripts: [`${context}/$app.bundle.js`],
    links: [`${context}/$app.min.css`],
    routes: [
      /* ------------------------------Vue------------------------------*/
      {
        // 用户管理(Vue)
        path: '/vue_user',
        name: '$userVue',
        scripts: [`${context}/$userVue.umd.min.js`],
      },
      {
        // 系统设置(Vue)
        path: '/vue_setting',
        name: '$settingVue',
        scripts: [`${context}/$settingVue.umd.min.js`],
      },
      {
        // 系统管理(Vue)
        path: '/vue_system',
        name: '$systemVue',
        scripts: [`${context}/$systemVue.umd.min.js`],
        links: [`${context}/$systemVue.css`],
        routes: [
          {
            path: '/',
            redirect: '/vue_system/vue_menu',
          },
          {
            // 菜单管理
            path: '/vue_system/vue_menu',
            name: '$menuVue',
            scripts: [`${context}/$menuVue.umd.min.js`],
          },
          {
            // 角色管理
            path: '/vue_system/vue_role',
            name: '$roleVue',
            scripts: [`${context}/$roleVue.umd.min.js`],
          },
          {
            // 部门管理
            path: '/vue_system/vue_department',
            name: '$departmentVue',
            scripts: [`${context}/$departmentVue.umd.min.js`],
          },
          {
            // 统计管理
            path: '/vue_system/vue_statistics/*',
            name: '$statisticsVue',
            scripts: [`${context}/$statisticsVue.umd.min.js`],
          },
        ],
      },

      /* -----------------------------React-----------------------------*/
      {
        path: '/',
        redirect: '/user',
      },
      {
        // 用户管理(React)
        path: '/user',
        name: '$user',
        scripts: [`${context}/$user.bundle.js`],
        links: [`${context}/$user.min.css`],
      },
      {
        // 系统设置(React)
        path: '/setting',
        name: '$setting',
        scripts: [`${context}/$setting.bundle.js`],
        links: [`${context}/$setting.min.css`],
      },
      {
        // 系统管理(React)
        path: '/system',
        name: '$system',
        scripts: [`${context}/$system.bundle.js`],
        links: [`${context}/$system.min.css`],
        routes: [
          {
            path: '/',
            redirect: '/system/menu',
          },
          {
            // 菜单管理
            path: '/system/menu',
            name: '$menu',
            scripts: [`${context}/$menu.bundle.js`],
            links: [`${context}/$menu.min.css`],
          },
          {
            // 角色管理
            path: '/system/role',
            name: '$role',
            scripts: [`${context}/$role.bundle.js`],
            links: [`${context}/$role.min.css`],
          },
          {
            // 部门管理
            path: '/system/department',
            name: '$department',
            scripts: [`${context}/$department.bundle.js`],
            links: [`${context}/$department.min.css`],
          },
          {
            // 统计管理
            path: '/system/statistics/*',
            name: '$statistics',
            scripts: [`${context}/$statistics.bundle.js`],
            links: [`${context}/$statistics.min.css`],
          },
        ],
      },
    ],
  },
];

const app = document.getElementById('app');
const container = document.getElementById('container');

/**
 * 注册
 */
register(config, container).then(() => {
  /**
   * 启动
   */
  start(app).then((r) => {
    console.log(r);
  });
});
