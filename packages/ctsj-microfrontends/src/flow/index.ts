import { dataFlowEmitter } from '../emit/emitter';
import { APP_DATAFLOW_CHANGE, DATAFLOW_CHANGE } from '../emit/actions';

// 数据
let store;

/**
 * onDataFlowChange
 * @param defaultStore
 */
function onDataFlowChange(defaultStore: any): void {
  store = defaultStore;

  // 发送数据流更改事件
  dataFlowEmitter.trigger(DATAFLOW_CHANGE, store);
}

export default {
  /**
   * getStore - 获取数据流数据
   * @return any
   */
  getStore(): any {
    return JSON.parse(JSON.stringify(store));
  },
  /**
   * setStore - 设置数据流数据
   * @param defaultStore
   */
  setStore(defaultStore: any): void {
    store = defaultStore;
  },
  /**
   * subscribeFlowChange - 订阅客户端数据流更改事件
   */
  subscribeFlowChange(): void {
    dataFlowEmitter.on(APP_DATAFLOW_CHANGE, onDataFlowChange);
  },
  /**
   * unSubscribeFlowChange - 取消客户端订阅数据流更改事件
   */
  unSubscribeFlowChange(): void {
    dataFlowEmitter.remove(APP_DATAFLOW_CHANGE, onDataFlowChange);
  },
  /**
   * triggerFlowChange - 触发客户端数据流改变
   * @param changeData
   */
  triggerFlowChange(changeData: any): void {
    dataFlowEmitter.trigger(APP_DATAFLOW_CHANGE, changeData);
  },
};
