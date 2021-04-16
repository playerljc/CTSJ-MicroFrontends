// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
// @ts-ignore
import { browserConfig } from '@ctsj/router';

// @ts-ignore
import { createComponent } from './component';

import type { IRegisterConfig, IRouteConfig } from './types';

const router: IRouteConfig[] = [];

/**
 * loop
 * @param config
 * @param routes
 * @param el
 */
function loop(config: IRegisterConfig[], routes: IRouteConfig[], el: HTMLElement) {
  for (let i = 0; i < config.length; i++) {
    const item = config[i];

    if ('redirect' in item) {
      routes.push({
        path: item.path,
        redirect: item.redirect,
      });
    } else {
      const children: IRouteConfig[] = [];

      loop(item.routes || [], children, el);

      routes.push({
        path: item.path,
        component: createComponent(item, el),
        routes: children,
      });
    }
  }
}

/**
 * register - 路由的配置
 * @param config
 * @param el - 渲染的el
 * @return Promise
 */
export function register(config: IRegisterConfig[], el: HTMLElement): Promise<null> {
  // 需要对ctsj-router的路由配置进行定制
  return new Promise((resolve) => {
    loop(config, router, el);

    resolve();
  });
}

/**
 * start
 * @param el
 */
export function start(el: HTMLElement): Promise<null> {
  return new Promise((resolve) => {
    // @ts-ignore
    ReactDOM.render(browserConfig(router), el, () => {
      resolve();
    });
  });
}
