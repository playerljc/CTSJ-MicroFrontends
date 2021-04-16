"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createComponent=void 0;var react_1=__importDefault(require("react")),context_1=__importDefault(require("./context"));function loadScript(n){return new Promise(function(t){var e=document.createElement("script");e.addEventListener("load",function(){t()}),e.src=n,document.getElementsByTagName("head")[0].appendChild(e)})}function loadLink(n){return new Promise(function(t){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.addEventListener("load",function(){t()}),e.href=n,document.getElementsByTagName("head")[0].appendChild(e)})}function loadRemoteResource(t){var e=t.scripts,t=t.links;return Promise.all([].concat((e||[]).map(function(t){return loadScript(t)}),(t||[]).map(function(t){return loadLink(t)})))}function createComponent(i,o){return e=react_1.default.Component,__extends(t,e),t.prototype.componentDidMount=function(){var t,e=this,n=i.name;window[n]?(null!==(t=window[n])&&void 0!==t&&t.bootstrap({props:this.props,config:i,el:this.el||o,refresh:this.refresh}),null!==(t=null===(t=window[n])||void 0===t?void 0:t.mount())&&void 0!==t&&t.then(function(){e.setState({isReady:!0})})):loadRemoteResource({scripts:i.scripts,links:i.links}).then(function(){var t;null!==(t=window[n])&&void 0!==t&&t.bootstrap({props:e.props,config:i,el:e.el||o,refresh:e.refresh}),null!==(t=null===(t=window[n])||void 0===t?void 0:t.mount())&&void 0!==t&&t.then(function(){e.setState({isReady:!0})})})},t.prototype.componentDidUpdate=function(t,e,n){console.log("prevState.isReady",e.isReady),console.log("this.state.isReady",this.state.isReady),this.lock?this.lock=!1:e.isReady===this.state.isReady&&(e=i.name,null!==(e=window[e])&&void 0!==e&&e.update(t,this.props))},t.prototype.componentWillUnmount=function(){var t=i.name;null!==(t=window[t])&&void 0!==t&&t.unmount()},t.prototype.refresh=function(){this.lock=!0,this.forceUpdate()},t.prototype.render=function(){var e=this,n=i.name,o=this.state.isReady,r=this.props.children;return react_1.default.createElement(context_1.default.Consumer,null,function(t){return e.el=t,react_1.default.createElement(context_1.default.Provider,{value:null===(t=window[n])||void 0===t?void 0:t.getChild()},o&&window[n]?r:null)})},t;function t(t){t=e.call(this,t)||this;return t.el=null,t.lock=!1,t.state={isReady:!1},t.refresh=t.refresh.bind(t),t}var e}exports.createComponent=createComponent;
//# sourceMappingURL=component.js.map
