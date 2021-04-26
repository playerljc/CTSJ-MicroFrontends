import * as Actions from './emit/actions';
import * as Emitter from './emit/emitter';
import ReactApp from './plugins/reactApp';
import VueApp from './plugins/vueApp';
import * as Types from './types';
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
    Flow: {
        getStore(): any;
        setStore(defaultStore: any): void;
        subscribeFlowChange(): void;
        unSubscribeFlowChange(): void;
        triggerFlowChange(changeData: any): void;
    };
};
export default _default;
