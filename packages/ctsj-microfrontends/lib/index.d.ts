import type { IRegisterConfig } from './types';
/**
 * register - 路由的配置
 * @param config
 * @param el - 渲染的el
 * @return Promise
 */
export declare function register(config: IRegisterConfig[], el: HTMLElement): Promise<null>;
/**
 * start
 * @param el
 */
export declare function start(el: HTMLElement): Promise<null>;
