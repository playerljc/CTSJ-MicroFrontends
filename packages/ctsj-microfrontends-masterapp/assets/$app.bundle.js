!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.$app=t(require("React"),require("ReactDOM")):e.$app=t(e.React,e.ReactDOM)}(window,(function(e,t){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="Jqwn")}({"+sNf":function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},GpDX:function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,o(t,n)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},Jqwn:function(e,t,o){"use strict";o.r(t);var n=o("cDcd"),r=o.n(n),u=o("xvZv"),i=o.n(u),c=o("jrg+"),f=o.n(c),s=o("w0e/"),p=o.n(s),a=o("fcko"),l=o.n(a),d=o("iqV0"),y=o.n(d),x=o("VErS"),m=o.n(x),h=o("gwOI"),_=o.n(h),v=o("+sNf"),b=o.n(v),g=o("rVJx"),O=o.n(g);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=_()(e);if(t){var r=_()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return m()(this,o)}}var j,w=function(e){y()(o,e);var t=M(o);function o(){var e;f()(this,o);for(var n=arguments.length,u=new Array(n),i=0;i<n;i++)u[i]=arguments[i];return e=t.call.apply(t,[this].concat(u)),b()(l()(e),"ref",r.a.createRef()),e}return p()(o,[{key:"componentDidMount",value:function(){console.log("Frame componentDidMount")}},{key:"render",value:function(){var e=this;return console.log("Frame Render"),r.a.createElement("div",{className:O.a.Wrap},r.a.createElement("div",{className:O.a.Fixed},r.a.createElement("div",{className:O.a.Logo},"Logo"),r.a.createElement("div",{className:O.a.Menu},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){e.props.history.push("/user")}},"用户管理"),r.a.createElement("li",{onClick:function(){e.props.history.push("/system")}},"系统管理"),r.a.createElement("li",{onClick:function(){e.props.history.push("/setting")}},"系统设置"))),r.a.createElement("div",{className:O.a.Right},"Right")),r.a.createElement("div",{className:O.a.Auto,ref:this.ref}))}}]),o}(r.a.Component);t.default={bootstrap:function(e){var t=e.el,o=e.refresh,n=e.config,r=e.props;console.log("app","bootstrap"),j=new i.a({component:w,el:t,props:r,config:n,refresh:o})},mount:function(){return console.log("app","mount"),j.mount()},update:function(){console.log("app","update"),j.update()},unmount:function(){console.log("app","unmount"),j.unmount()},getChild:function(){var e,t,o;return console.log("app","getChild",j,j.getIns()),null===(e=j)||void 0===e||null===(t=e.getIns())||void 0===t||null===(o=t.ref)||void 0===o?void 0:o.current}}},KCdW:function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=o=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},VErS:function(e,t,o){var n=o("KCdW").default,r=o("fcko");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},cDcd:function(t,o){t.exports=e},faye:function(e,o){e.exports=t},fcko:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},gwOI:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},iqV0:function(e,t,o){var n=o("GpDX");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"jrg+":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},rVJx:function(e,t,o){e.exports={Wrap:"_2dRKzNIPcOu6n49bO5WSd4",Fixed:"_3NNq4PE4fl1gDTPtgb09Ay",Logo:"CTIGitSZSf7iati2AASyc",Right:"_1-q7XRTWtqWV6qgJhbXfyU",Menu:"_1TWa51PTUHcWa7IMylVTUf",Auto:"_1lCEvBpCOdC3midWGVrhvp"}},"w0e/":function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},xvZv:function(e,t,o){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=i(o("cDcd")),f=i(o("faye")),s=function(){function e(e){var t=e.component,o=e.el,n=e.props,r=e.config;e=e.refresh;this.ref=c.default.createRef(),this.ins=c.default.createRef(),this.Component=t,this.el=o,this.props=n,this.config=r,this.refresh=e}return e.prototype.ComponentHOC=function(){var e,t=this;return e=c.default.Component,r(o,e),o.prototype.render=function(){return c.default.createElement(t.Component,u({ref:t.ins},t.props,{config:t.config,refresh:t.refresh}))},o;function o(){return null!==e&&e.apply(this,arguments)||this}},e.prototype.mount=function(){var e=this;return new Promise((function(t){var o=e.ComponentHOC();f.default.render(c.default.createElement(o,{ref:e.ref}),e.el,(function(){t()}))}))},e.prototype.update=function(){var e=this;return new Promise((function(t){e.ref.current.forceUpdate((function(){t()}))}))},e.prototype.unmount=function(){return f.default.unmountComponentAtNode(this.el)},e.prototype.getIns=function(){var e;return null===(e=null==this?void 0:this.ins)||void 0===e?void 0:e.current},e}();t.default=s}}).default}));