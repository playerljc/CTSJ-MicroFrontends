/**
 * VueApp - Vue组件
 * @class VueApp
 * @classdesc VueApp
 */
declare class VueApp {
    private readonly Component;
    private readonly el;
    private readonly props;
    private readonly config;
    private refresh;
    private ins;
    private mountEl;
    private mountWrapEl;
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
     * mount - 挂载
     * @param config - vue的配置对象
     * @return Promise
     */
    mount(config?: {}): Promise<null>;
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
export default VueApp;
