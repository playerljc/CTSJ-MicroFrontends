/**
 * ReactApp - React组件
 * @class ReactApp
 * @classdesc ReactApp
 */
declare class ReactApp {
    private ref;
    private ins;
    private readonly Component;
    private readonly el;
    private mountEl;
    private readonly props;
    private readonly config;
    private refresh;
    /**
     * constructor
     * @param component
     * @param el
     * @param props
     * @param config
     * @param refresh
     */
    constructor({ component, el, props, config, refresh }: {
        component: any;
        el: any;
        props: any;
        config: any;
        refresh: any;
    });
    /**
     * createMountEl - 创建挂载的el
     */
    createMountEl(): void;
    /**
     * ComponentHOC - 对组件进行包装
     * @return React.Component
     */
    private ComponentHOC;
    /**
     * mount - 挂载
     * @return Promise
     */
    mount(): Promise<null>;
    /**
     * update - 更新
     * @return Promise
     */
    update(): Promise<null>;
    /**
     * unmount - 销毁
     * @return boolean
     */
    unmount(): boolean;
    /**
     * getIns
     */
    getIns(): any;
}
export default ReactApp;
