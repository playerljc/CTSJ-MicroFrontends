!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["antd","React","ReactDOM"],t):"object"==typeof exports?exports.$department=t(require("antd"),require("React"),require("ReactDOM")):e.$department=t(e.antd,e.React,e.ReactDOM)}(window,(function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="Jqwn")}({"+sNf":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},Exp3:function(t,n){t.exports=e},GpDX:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,o)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},JLH1:function(e,t,n){},Jqwn:function(e,t,n){"use strict";n.r(t);var o=n("cDcd"),r=n.n(o),u=n("xvZv"),c=n.n(u),s=n("jrg+"),f=n.n(s),i=n("w0e/"),a=n.n(i),p=n("fcko"),l=n.n(p),d=n("iqV0"),y=n.n(d),x=n("VErS"),_=n.n(x),m=n("gwOI"),h=n.n(m),b=n("+sNf"),v=n.n(b),g=n("Exp3"),O=n("JLH1"),w=n.n(O);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _()(this,n)}}for(var S=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],R=[],M=0;M<46;M++)R.push({key:M,name:"Edward King ".concat(M),age:32,address:"London, Park Lane no. ".concat(M)});var E,C=function(e){y()(n,e);var t=j(n);function n(){var e;f()(this,n);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return e=t.call.apply(t,[this].concat(r)),v()(l()(e),"state",{selectedRowKeys:[]}),e}return a()(n,[{key:"render",value:function(){var e=this,t={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange,selections:[g.Table.SELECTION_ALL,g.Table.SELECTION_INVERT,g.Table.SELECTION_NONE,{key:"odd",text:"Select Odd Row",onSelect:function(t){var n;n=t.filter((function(e,t){return t%2==0})),e.setState({selectedRowKeys:n})}},{key:"even",text:"Select Even Row",onSelect:function(t){var n;n=t.filter((function(e,t){return t%2!=0})),e.setState({selectedRowKeys:n})}}]};return r.a.createElement("div",{className:w.a.Wrap},r.a.createElement(g.Table,{rowSelection:t,columns:S,dataSource:R}))}}]),n}(r.a.Component);t.default={bootstrap:function(e){var t=e.el,n=e.refresh,o=e.config,r=e.props;console.log("department","bootstrap"),E=new c.a({component:C,el:t,props:r,config:o,refresh:n})},mount:function(){return console.log("department","mount"),E.mount()},update:function(){console.log("department","update"),E.update()},unmount:function(){console.log("department","unmount"),E.unmount()},getChild:function(){return console.log("department","getChild"),null}}},KCdW:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},VErS:function(e,t,n){var o=n("KCdW").default,r=n("fcko");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},cDcd:function(e,n){e.exports=t},faye:function(e,t){e.exports=n},fcko:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},gwOI:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},iqV0:function(e,t,n){var o=n("GpDX");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"jrg+":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},"w0e/":function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},xvZv:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=c(n("cDcd")),f=c(n("faye")),i=function(){function e(e){var t=e.component,n=e.el,o=e.props,r=e.config;e=e.refresh;this.ref=s.default.createRef(),this.ins=s.default.createRef(),this.Component=t,this.el=n,this.props=o,this.config=r,this.refresh=e}return e.prototype.ComponentHOC=function(){var e,t=this;return e=s.default.Component,r(n,e),n.prototype.render=function(){return s.default.createElement(t.Component,u({ref:t.ins},t.props,{config:t.config,refresh:t.refresh}))},n;function n(){return null!==e&&e.apply(this,arguments)||this}},e.prototype.mount=function(){var e=this;return new Promise((function(t){var n=e.ComponentHOC();f.default.render(s.default.createElement(n,{ref:e.ref}),e.el,(function(){t()}))}))},e.prototype.update=function(){var e=this;return new Promise((function(t){e.ref.current.forceUpdate((function(){t()}))}))},e.prototype.unmount=function(){return f.default.unmountComponentAtNode(this.el)},e.prototype.getIns=function(){var e;return null===(e=null==this?void 0:this.ins)||void 0===e?void 0:e.current},e}();t.default=i}}).default}));