import Events from './events';

// 路由变化的emit
const routerChangeEmitter = new Events();

// 数据流变化的emit
const dataFlowEmitter = new Events();

export { routerChangeEmitter, dataFlowEmitter };
