// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { browserConfig } from '@ctsj/router';

import App from './app';
import StatisticsTotal from './StatisticsTotal';
import StatisticsPerson from './StatisticsPerson';
import StatisticsDepartment from './StatisticsDepartment';

const config = [
  {
    // 汇总统计
    path: '/system/statistics',
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/system/statistics/total',
      },
      {
        // 汇总统计
        path: '/system/statistics/total',
        component: StatisticsTotal,
      },
      {
        // 人员统计
        path: '/system/statistics/person',
        component: StatisticsPerson,
      },
      {
        // 部门统计
        path: '/system/statistics/department',
        component: StatisticsDepartment,
      },
    ],
  },
];

const Router = browserConfig(config);

export default Router;
