// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import './index.less';

import { register, start } from '@ctsj/microfrontends';

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
      {
        path: '/',
        redirect: '/user',
      },
      {
        // 用户管理
        path: '/user',
        name: '$user',
        scripts: [`${context}/$user.bundle.js`],
        links: [`${context}/$user.min.css`],
      },
      {
        // 系统设置
        path: '/setting',
        name: '$setting',
        scripts: [`${context}/$setting.bundle.js`],
        links: [`${context}/$setting.min.css`],
      },
      {
        // 系统管理
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
