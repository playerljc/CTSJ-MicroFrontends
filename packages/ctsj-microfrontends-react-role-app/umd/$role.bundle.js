!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("CtsjMicroFrontends"),require("antd"),require("React")):"function"==typeof define&&define.amd?define(["CtsjMicroFrontends","antd","React"],t):"object"==typeof exports?exports.$role=t(require("CtsjMicroFrontends"),require("antd"),require("React")):e.$role=t(e.CtsjMicroFrontends,e.antd,e.React)}(window,(function(e,t,o){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="Jqwn")}({"+sNf":function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},"/9Dr":function(t,o){t.exports=e},Exp3:function(e,o){e.exports=t},GpDX:function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,o(t,n)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},Jqwn:function(e,t,o){"use strict";o.r(t);var n=o("cDcd"),r=o.n(n),u=o("/9Dr"),c=o.n(u),s=o("jrg+"),f=o.n(s),l=o("w0e/"),a=o.n(l),i=o("fcko"),p=o.n(i),d=o("iqV0"),x=o.n(d),y=o("VErS"),b=o.n(y),_=o("gwOI"),m=o.n(_),v=o("+sNf"),g=o.n(v),w=o("Exp3"),h=o("nmIB"),O=o.n(h);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=m()(e);if(t){var r=m()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return b()(this,o)}}for(var j=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],M=[],E=0;E<46;E++)M.push({key:E,name:"Edward King ".concat(E),age:32,address:"London, Park Lane no. ".concat(E)});var R,C=function(e){x()(o,e);var t=S(o);function o(){var e;f()(this,o);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return e=t.call.apply(t,[this].concat(r)),g()(p()(e),"state",{selectedRowKeys:[]}),e}return a()(o,[{key:"render",value:function(){var e=this,t={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange,selections:[w.Table.SELECTION_ALL,w.Table.SELECTION_INVERT,w.Table.SELECTION_NONE,{key:"odd",text:"Select Odd Row",onSelect:function(t){var o;o=t.filter((function(e,t){return t%2==0})),e.setState({selectedRowKeys:o})}},{key:"even",text:"Select Even Row",onSelect:function(t){var o;o=t.filter((function(e,t){return t%2!=0})),e.setState({selectedRowKeys:o})}}]};return r.a.createElement("div",{className:O.a.Wrap},r.a.createElement(w.Table,{rowSelection:t,columns:j,dataSource:M}))}}]),o}(r.a.Component),P=c.a.ReactApp;t.default={bootstrap:function(e){var t=e.el,o=e.refresh,n=e.config,r=e.props;console.log("role","bootstrap"),R=new P({component:C,el:t,props:r,config:n,refresh:o})},mount:function(){return console.log("role","mount"),R.mount()},update:function(){console.log("role","update"),R.update()},unmount:function(){console.log("role","unmount"),R.unmount()},getChild:function(){return console.log("role","getChild"),null}}},KCdW:function(e,t){function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=o=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},VErS:function(e,t,o){var n=o("KCdW").default,r=o("fcko");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},cDcd:function(e,t){e.exports=o},fcko:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},gwOI:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},iqV0:function(e,t,o){var n=o("GpDX");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"jrg+":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},nmIB:function(e,t,o){},"w0e/":function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0}}).default}));