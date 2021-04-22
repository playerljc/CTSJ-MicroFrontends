import * as Actions from './actions';
import ReactApp from './reactAppFactory';
import type * as Types from './types';
import * as Emitter from './emitter';
/**
 * register - 路由的配置
 * @param config - 路由的配置
 * @param el - 渲染的el
 * @return Promise
 */
export declare function register(config: Types.IRegisterConfig[], el: HTMLElement): Promise<null>;
/**
 * start - 开启
 * @param el
 */
export declare function start(el: HTMLElement): Promise<null>;
export { Actions, ReactApp, Types, Emitter };
