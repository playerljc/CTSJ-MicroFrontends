declare const _default: {
    /**
     * getStore - 获取数据流数据
     * @return any
     */
    getStore(): any;
    /**
     * setStore - 设置数据流数据
     * @param defaultStore
     */
    setStore(defaultStore: any): void;
    /**
     * subscribeFlowChange - 订阅客户端数据流更改事件
     */
    subscribeFlowChange(): void;
    /**
     * unSubscribeFlowChange - 取消客户端订阅数据流更改事件
     */
    unSubscribeFlowChange(): void;
    /**
     * triggerFlowChange - 触发客户端数据流改变
     * @param changeData
     */
    triggerFlowChange(changeData: any): void;
};
export default _default;
