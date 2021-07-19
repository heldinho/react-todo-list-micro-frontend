/*! For license information please see atlas-react-todo-list.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var r={},n={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){n.default=e.default}],execute:function(){e((()=>{var e={418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,u,c=o(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(c[l]=i[l]);if(t){u=t(i);for(var p=0;p<u.length;p++)n.call(i,u[p])&&(c[u[p]]=i[u[p]])}}return c}},251:(e,t,r)=>{"use strict";r(418);var n=r(297),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.jsx=s,t.jsxs=s},893:(e,t,r)=>{"use strict";e.exports=r(251)},722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i};Number.isInteger},297:e=>{"use strict";e.exports=r},268:e=>{"use strict";e.exports=n}},o={};function a(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.y=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>D,mount:()=>T,unmount:()=>x});var e=a(297),t=a(268);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=null;try{c=require("react").createContext()}catch(r){}var s={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function l(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function p(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=d(e,t,(function(){r(this)})),i=function(e,t){var r=e(t);if(!r)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return r}(o,t),u=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(t.renderType)>=0){var o=t.ReactDOM[t.renderType](n);return o.render(r),o}return"hydrate"===t.renderType?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n)}({elementToRender:a,domElement:i,opts:e});e.domElements[t.name]=i,e.renderResults[t.name]=u}))}function f(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function m(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=d(e,t,null);e.renderResults[t.name].render(n)}))}function d(e,t,r){var n=e.React.createElement(e.rootComponent,t),o=c?e.React.createElement(c.Provider,{value:t},n):n;function a(e){a.displayName="SingleSpaRoot(".concat(e.name,")")}return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(r){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(r.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(e),o=e.React.createElement(e.errorBoundaryClass,t,o)),o=e.React.createElement(a,u(u({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),o),a.prototype=Object.create(e.React.Component.prototype),a.prototype.componentDidMount=function(){this.mounted=!0,setTimeout(this.props.mountFinished)},a.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},a.prototype.render=function(){return this.mounted&&setTimeout(this.props.updateFinished),this.props.children},o}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?E(e):t}var P=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(o,e.default.Component);var r,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j(this,r)}}(o);function o(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),b(E(t=n.call(this,e)),"handleRef",(function(e){t.el=e})),b(E(t),"addThingToDo",(function(e,r){t.state.hasError&&"unmount"!==e||(t.nextThingToDo=(t.nextThingToDo||Promise.resolve()).then((function(){if(!t.unmounted||"unmount"===e)return r.apply(void 0,arguments)})).catch((function(r){throw t.nextThingToDo=Promise.resolve(),t.setState({hasError:!0}),r&&r.message&&(r.message="During '".concat(e,"', parcel threw an error: ").concat(r.message)),t.props.handleError?t.props.handleError(r):setTimeout((function(){throw r})),r})))})),b(E(t),"getParcelProps",(function(){var e=g({},t.props);return delete e.mountParcel,delete e.config,delete e.wrapWith,delete e.wrapStyle,delete e.appendTo,delete e.handleError,delete e.parcelDidMount,e})),t.state={hasError:!1},!e.config)throw new Error("single-spa-react's Parcel component requires the 'config' prop to either be a parcel config or a loading function that returns a promise. See https://github.com/single-spa/single-spa-react");return t}return(r=[{key:"componentDidMount",value:function(){var e=this;this.addThingToDo("mount",(function(){var t,r=e.props.mountParcel||e.mountParcel;if(!r)throw new Error("\n\t\t\t\t  <Parcel /> was not passed a mountParcel prop, nor is it rendered where mountParcel is within the React context.\n\t\t\t\t  If you are using <Parcel /> within a module that is not a single-spa application, you will need to import mountRootParcel from single-spa and pass it into <Parcel /> as a mountParcel prop\t\n\t\t\t\t");return e.el?t=e.el:(e.createdDomElement=t=document.createElement(e.props.wrapWith),Object.keys(e.props.wrapStyle).forEach((function(r){t.style[r]=e.props.wrapStyle[r]})),e.props.appendTo.appendChild(t)),e.parcel=r(e.props.config,g({domElement:t},e.getParcelProps())),e.parcel.mountPromise.then(e.props.parcelDidMount),e.parcel.mountPromise}))}},{key:"componentDidUpdate",value:function(){var e=this;this.addThingToDo("update",(function(){if(e.parcel&&e.parcel.update)return e.parcel.update(e.getParcelProps())}))}},{key:"componentWillUnmount",value:function(){var e=this;this.addThingToDo("unmount",(function(){if(e.parcel&&"MOUNTED"===e.parcel.getStatus())return e.parcel.unmount()})),this.createdDomElement&&this.createdDomElement.parentNode.removeChild(this.createdDomElement),this.unmounted=!0}},{key:"render",value:function(){var t=this;if(this.props.appendTo)return c&&c.Consumer?e.default.createElement(c.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):null;var r=c&&c.Consumer?e.default.createElement(c.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):void 0;return e.default.createElement(this.props.wrapWith,{ref:this.handleRef,style:this.props.wrapStyle,className:this.props.wrapClassName},r)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,r),o}();b(P,"defaultProps",{wrapWith:"div",wrapStyle:{},parcelDidMount:function(){}});const R=P;var S=a(893),C=function(e){if("object"!==r(e))throw new Error("single-spa-react requires a configuration object");var t=u(u({},s),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!c&&t.React.createContext&&(c=t.React.createContext());var n={bootstrap:l.bind(null,t),mount:p.bind(null,t),unmount:f.bind(null,t)};return t.parcelCanUpdate&&(n.update=m.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(){var t,r,n=(t=e.default.useState([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,r)||h(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(R,{config:function(){return System.import("@atlas/vue-todo-list")}}),(0,S.jsx)("h1",{children:"React Todo List"}),(0,S.jsx)("input",{type:"text",onKeyUp:function(e){13===e.keyCode&&(a([].concat(function(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o),[{text:e.target.value}])),dispatchEvent(new CustomEvent("@atlas/react-todo-list/add-task",{detail:{text:e.target.value}})))}}),(0,S.jsx)("pre",{children:JSON.stringify(o,void 0,2)})]})},errorBoundary:function(e,t,r){return null}}),D=C.bootstrap,T=C.mount,x=C.unmount})(),i})())}}}));
//# sourceMappingURL=atlas-react-todo-list.js.map