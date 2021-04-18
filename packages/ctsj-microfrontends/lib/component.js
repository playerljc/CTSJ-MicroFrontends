"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createComponent=void 0;var react_1=__importDefault(require("react")),react_loading_skeleton_1=__importDefault(require("react-loading-skeleton")),context_1=__importDefault(require("./context"));function loadScript(n){return new Promise(function(e){var t=document.createElement("script");t.addEventListener("load",function(){e()}),t.src=n,document.getElementsByTagName("head")[0].appendChild(t)})}function loadLink(n){return new Promise(function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.addEventListener("load",function(){e()}),t.href=n,document.getElementsByTagName("head")[0].appendChild(t)})}function loadRemoteResource(e){var t=e.scripts,e=e.links;return Promise.all([].concat((t||[]).map(function(e){return loadScript(e)}),(e||[]).map(function(e){return loadLink(e)})))}function createComponent(i,o){return t=react_1.default.Component,__extends(e,t),e.prototype.componentDidMount=function(){var t=this,e=this.props.history;this.unListen=e.listen(function(e){console.log("pathChange",e)});var n=i.name;window[n]?(null!==(e=window[n])&&void 0!==e&&e.bootstrap({props:this.props,config:i,el:this.el||o,refresh:this.refresh}),null!==(e=null===(e=window[n])||void 0===e?void 0:e.mount())&&void 0!==e&&e.then(function(){t.setState({isReady:!0})})):loadRemoteResource({scripts:i.scripts,links:i.links}).then(function(){var e;null!==(e=window[n])&&void 0!==e&&e.bootstrap({props:t.props,config:i,el:t.el||o,refresh:t.refresh}),null!==(e=null===(e=window[n])||void 0===e?void 0:e.mount())&&void 0!==e&&e.then(function(){t.setState({isReady:!0})})})},e.prototype.componentDidUpdate=function(e,t,n){console.log("prevState.isReady",t.isReady),console.log("this.state.isReady",this.state.isReady),this.lock?this.lock=!1:t.isReady===this.state.isReady&&(t=i.name,null!==(t=window[t])&&void 0!==t&&t.update(e,this.props))},e.prototype.componentWillUnmount=function(){this.unListen();var e=i.name;null!==(e=window[e])&&void 0!==e&&e.unmount()},e.prototype.refresh=function(){this.lock=!0,this.forceUpdate()},e.prototype.render=function(){var t=this,n=i.name,o=this.state.isReady,r=this.props.children;return react_1.default.createElement(context_1.default.Consumer,null,function(e){return t.el=e,react_1.default.createElement(context_1.default.Provider,{value:null===(e=window[n])||void 0===e?void 0:e.getChild()},o&&window[n]?r:react_1.default.createElement(react_loading_skeleton_1.default,null))})},e;function e(e){e=t.call(this,e)||this;return e.el=null,e.lock=!1,e.state={isReady:!1},e.refresh=e.refresh.bind(e),e}var t}exports.createComponent=createComponent;
//# sourceMappingURL=component.js.map
