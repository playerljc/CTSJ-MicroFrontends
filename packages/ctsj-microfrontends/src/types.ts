import type React from 'react';

export type IProps = Readonly<any> & Readonly<{ children?: React.ReactNode }>;

interface IGetChild {
  (): HTMLElement;
}

interface IBootstrap {
  (params: {
    el: HTMLElement | null;
    refresh: () => void;
    config: IRegisterConfig;
    props: IProps;
  }): void;
}

/**
 * IContext - 微应用的钩子定义
 */
export interface IContext {
  bootstrap: IBootstrap;
  mount: () => {};
  update: (prevProps: IProps, props: IProps) => {};
  unmount: () => {};
  getChild: IGetChild;
}

export interface IComponentHOCProps {
  config: IRegisterConfig;
  refresh: () => {};
}

/**
 * IRegisterConfig
 */
export interface IRegisterConfig {
  // 路径
  path: string;
  // 名称
  name: string;
  // 重定向
  redirect?: string;
  // routes
  routes?: IRegisterConfig[];

  // 样式路径
  links?: string[];
  // 脚本路径
  scripts: string[];
}

/**
 * IRouterConfig
 */
export type IRouterConfig = IRouteConfig[];

/**
 * IRouterConfig - Route的配置
 * @interface IRouteConfig
 */
export interface IRouteConfig {
  // 路径
  path: string;
  // Route的组件
  component?: React.ReactElement | null;
  // 重定向
  redirect?: string;
  // routes
  routes?: IRouterConfig;
}
