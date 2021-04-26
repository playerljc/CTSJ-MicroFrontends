var __extends=this&&this.__extends||function(){var o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};import React from"react";import ReactDOM from"react-dom";var ReactApp=function(){function t(t){var n=t.component,e=t.el,o=t.props,r=t.config,t=t.refresh;this.ref=React.createRef(),this.ins=React.createRef(),this.Component=n,this.el=e,this.props=o,this.config=r,this.refresh=t,this.createMountEl()}return t.prototype.createMountEl=function(){this.mountEl=document.createElement("div"),this.mountEl.className="ctsj_microfrontends_reactapp_mountel",this.mountEl.style.width="100%",this.mountEl.style.height="100%",this.mountEl.style.padding="0",this.mountEl.style.margin="0",this.el.appendChild(this.mountEl)},t.prototype.ComponentHOC=function(){var t,n=this;return t=React.Component,__extends(e,t),e.prototype.render=function(){return React.createElement(n.Component,__assign({ref:n.ins},n.props,{config:n.config,refresh:n.refresh}))},e;function e(){return null!==t&&t.apply(this,arguments)||this}},t.prototype.mount=function(){var e=this;return new Promise(function(t){var n=e.ComponentHOC();ReactDOM.render(React.createElement(n,{ref:e.ref}),e.mountEl,function(){t()})})},t.prototype.update=function(){var n=this;return new Promise(function(t){n.ref.current.forceUpdate(function(){t()})})},t.prototype.unmount=function(){var t,n=ReactDOM.unmountComponentAtNode(this.mountEl);return null!==(t=null===(t=this.mountEl)||void 0===t?void 0:t.parentElement)&&void 0!==t&&t.removeChild(this.mountEl),n},t.prototype.getIns=function(){var t;return null===(t=null==this?void 0:this.ins)||void 0===t?void 0:t.current},t}();export default ReactApp;
//# sourceMappingURL=reactApp.js.map
