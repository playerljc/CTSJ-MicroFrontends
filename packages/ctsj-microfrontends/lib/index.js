import ReactDOM from"react-dom";import{browserConfig}from"@ctsj/router";import{createComponent}from"./component";import*as Actions from"./emit/actions";import*as Emitter from"./emit/emitter";import ReactApp from"./plugins/reactApp";import VueApp from"./plugins/vueApp";import*as Types from"./types";import Flow from"./flow";var router=[];function loop(t,r,e){for(var o=0;o<t.length;o++){var p,i=t[o];"redirect"in i?r.push({path:i.path,redirect:i.redirect}):(loop(i.routes||[],p=[],e),r.push({path:i.path,component:createComponent(i,e),routes:p}))}}function register(r,e){return new Promise(function(t){loop(r,router,e),t()})}function start(r){return new Promise(function(t){ReactDOM.render(browserConfig(router),r,function(){Flow.subscribeFlowChange(),t()})})}export default{register:register,start:start,Actions:Actions,ReactApp:ReactApp,VueApp:VueApp,Types:Types,Emitter:Emitter,Flow:Flow};
//# sourceMappingURL=index.js.map
