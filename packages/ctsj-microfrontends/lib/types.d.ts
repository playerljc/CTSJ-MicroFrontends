import type React from 'react';
export declare type IProps = Readonly<any> & Readonly<{
    children?: React.ReactNode;
}>;
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
    path: string;
    name: string;
    redirect?: string;
    routes?: IRegisterConfig[];
    links?: string[];
    scripts: string[];
}
/**
 * IRouterConfig
 */
export declare type IRouterConfig = IRouteConfig[];
/**
 * IRouterConfig - Route的配置
 * @interface IRouteConfig
 */
export interface IRouteConfig {
    path: string;
    component?: React.ReactElement | null;
    redirect?: string;
    routes?: IRouterConfig;
}
/**
 * ILocation
 */
export interface ILocation {
    pathname: string;
}
export {};
