// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { browserConfig } from '@ctsj/router';

import App from './app';
import Self1 from './self1';
import Self2 from './self2';

const config = [
  {
    path: '/react_mixing',
    component: App,
    routes: [
      {
        path: '/',
        redirect: '/react_mixing/self1',
      },
      {
        path: '/react_mixing/self1',
        component: Self1,
      },
      {
        path: '/react_mixing/self2',
        component: Self2,
      },
    ],
  },
];

const Router = browserConfig(config);

export default Router;
