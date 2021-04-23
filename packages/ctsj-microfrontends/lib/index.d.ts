import * as Actions from './actions';
import ReactApp from './reactAppFactory';
import VueApp from './vueAppFactory';
import * as Types from './types';
import * as Emitter from './emitter';
/**
 * register - 路由的配置
 * @param config - 路由的配置
 * @param el - 渲染的el
 * @return Promise
 */
declare function register(config: Types.IRegisterConfig[], el: HTMLElement): Promise<null>;
/**
 * start - 开启
 * @param el
 */
declare function start(el: HTMLElement): Promise<null>;
declare const _default: {
    register: typeof register;
    start: typeof start;
    Actions: typeof Actions;
    ReactApp: typeof ReactApp;
    VueApp: typeof VueApp;
    Types: typeof Types;
    Emitter: typeof Emitter;
};
export default _default;
