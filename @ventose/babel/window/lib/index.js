!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(12);e.default=i.WindowType},function(t,e,n){"use strict";n.r(e);var i=n(3),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(25);e.default=i.Button},function(t,e,n){var i=n(27);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(17)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(30);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(17)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var h=l.render;l.render=function(t,e){return u.call(e),h(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:l}}n.d(e,"a",function(){return i})},function(t,e){t.exports=require("tslib")},function(t,e,n){"use strict";function i(t){return window.TouchEvent&&t instanceof TouchEvent}Object.defineProperty(e,"__esModule",{value:!0}),e.isTouchEvent=i;var o=function(){function t(t){this.e=t}return t.prototype.stopPropagation=function(){this.e.stopPropagation()},t.prototype.preventDefault=function(){this.e.preventDefault()},Object.defineProperty(t.prototype,"clientX",{get:function(){return i(this.e)?("touchend"===this.e.type?this.e.changedTouches:this.e.touches).item(0).clientX:this.e.clientX},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clientY",{get:function(){return i(this.e)?("touchend"===this.e.type?this.e.changedTouches:this.e.touches).item(0).clientY:this.e.clientY},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clientCoord",{get:function(){return new r(this.clientX,this.clientY)},enumerable:!0,configurable:!0}),t.bindDown=function(e,n,i,o){void 0===o&&(o=!1);var r=function(e){n(new t(e))},s=function(e){1===e.touches.length&&n(new t(e)),e.touches.length>1&&i&&i(new t(e))};return e.addEventListener("mousedown",r,o),e.addEventListener("touchstart",s,o),function(){e.removeEventListener("mousedown",r,o),e.removeEventListener("touchstart",s,o)}},t.bindMove=function(e,n,i){void 0===i&&(i=!1);var o=function(e){n(new t(e))},r=function(e){1===e.touches.length&&n(new t(e))};return e.addEventListener("mousemove",o,i),e.addEventListener("touchmove",r,i),function(){e.removeEventListener("mousemove",o,i),e.removeEventListener("touchmove",r,i)}},t.bindUp=function(e,n,i){void 0===i&&(i=!1);var o=function(e){n(new t(e))},r=function(e){0===e.touches.length&&n(new t(e))};return e.addEventListener("mouseup",o,i),e.addEventListener("touchend",r,i),function(){e.removeEventListener("mouseup",o,i),e.removeEventListener("touchend",r,i)}},t.prototype.originalEvent=function(t){var e=t.mouse,n=t.touch;i(this.e)?n&&n(this.e):e&&e(this.e)},t}();e.SinglePointerEvent=o;var r=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.clone=function(){return new t(this.x,this.y)},t}();e.V2=r},function(t,e,n){"use strict";function i(t){return{provide:function(){var n;return(n={})[e.WINDOW_STYLE_KEY]=t,n},render:function(t){return t("div",this.$slots.default)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.WINDOW_STYLE_KEY="@hscmap/vue-window/windowStyle",e.StyleFactory=i,e.StyleBlack=i({window:{color:"#fff",boxShadow:"0 0 6pt rgba(255, 255, 255, 0.75)",backgroundColor:"rgba(31, 31, 31, 0.9)"},titlebar:{backgroundColor:"rgba(63, 63, 63, 0.9)"},content:{},button:{color:"white"},buttonHover:{backgroundColor:"rgba(255, 255, 255, 0.25)"},buttonActive:{color:"black",backgroundColor:"rgba(255, 255, 255, 0.5)"}}),e.StyleWhite=i({window:{color:"#000",boxShadow:"0 2pt 4pt rgba(0, 0, 0, 0.5)",backgroundColor:"rgba(239, 239, 239, 0.95)"},titlebar:{backgroundColor:"rgba(191, 191, 191, 0.9)"},content:{},button:{color:"#000"},buttonHover:{backgroundColor:"rgba(0, 0, 0, 0.25)"},buttonActive:{color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.5)"}}),e.StyleMetal=i({window:{color:"#000",boxShadow:"0 4pt 8pt rgba(0, 0, 0, 0.5)",background:"linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))"},titlebar:{background:"linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))"},content:{},button:{color:"#000"},buttonHover:{backgroundColor:"rgba(0, 0, 0, 0.25)"},buttonActive:{color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.5)"}})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":function(e){return t.$emit("close")},"after-enter":function(e){return t.$emit("open")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"window",staticClass:"window",style:t.styleWindow,attrs:{id:"window-201909055405"},on:{mousedown:t.activate,touchstart:t.activate}},[n("div",{ref:"titlebar",staticClass:"titlebar",style:t.styleTitlebar},[n("div",{staticClass:"title"},[t.$slots.title?[t._t("title")]:[t._v(t._s(t.title))]],2),t._v(" "),t.closeButton?[n("my-button",{on:{click:t.closeButtonClick}},[t._v("×")])]:t._e()],2),t._v(" "),n("div",{ref:"content",staticClass:"content",style:t.styleContent},[t._t("default")],2)])])},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"button",style:t.style,attrs:{disabled:t.disabled},on:{mouseenter:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},mousedown:function(e){return e.stopPropagation(),t.mousedown(e)},touchstart:function(e){return e.stopPropagation(),t.mousedown(e)},mouseup:t.mouseup,touchend:t.mouseup}},[t._t("default")],2)},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),o=n(13),r=n(14),s=n(21),a=n(22),u=n(9),l=n(15),h=n(23),p=n(24),c=[],d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.zIndex="auto",e.openCount=0,e}return i.__extends(e,t),e.prototype.mounted=function(){var t=this;c.push(this),this.zElement=new h.ZElement(this.zGroup,function(e){return t.zIndex=""+e}),this.isOpen&&this.onIsOpenChange(!0),l.windows.add(this)},e.prototype.beforeDestroy=function(){l.windows.delete(this),this.zElement.unregister(),this.resizableHelper&&this.resizableHelper.teardown(),this.draggableHelper&&this.draggableHelper.teardown(),c.splice(c.indexOf(this),1)},e.prototype.windowElement=function(){return this.$refs.window},e.prototype.titlebarElement=function(){return this.$refs.titlebar},e.prototype.contentElement=function(){return this.$refs.content},e.prototype.activate=function(){this.zElement.raise(),this.$emit("activate")},Object.defineProperty(e.prototype,"styleWindow",{get:function(){return i.__assign({},this.windowStyle.window,{zIndex:this.zIndex,overflow:this.overflow})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleTitlebar",{get:function(){return this.windowStyle.titlebar},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleContent",{get:function(){var t=i.__assign({},this.windowStyle.content);return this.resizable?t.padding="0":null!=this.padding&&(t.padding=this.padding+"px"),this.isScrollable&&(t.overflow="auto"),t},enumerable:!0,configurable:!0}),e.prototype.onResizableChange=function(t){console.error("prop 'resizable' can't be changed")},e.prototype.onIsOpenChange=function(t){var e=this;t&&(this.$nextTick(function(){0==e.openCount++&&(e.setWindowRect(e),e.setInitialPosition()),e.resizable&&e.onWindowResize(),e.onWindowMove(),e.draggableHelper=new s.DraggableHelper(e.titlebarElement(),e.windowElement(),{onMove:function(){return e.onWindowMove()},onMoveStart:function(){return e.$emit("move-start")},onMoveEnd:function(){return e.$emit("move-end")}}),e.resizable&&e.initResizeHelper()}),this.activateWhenOpen&&this.activate())},e.prototype.onZGroupChange=function(){this.zElement.group=this.zGroup},e.prototype.fixPosition=function(){var t=this.windowElement(),e=t.getBoundingClientRect();e.left<0&&(t.style.left="0px"),e.top<0&&(t.style.top="0px"),e.right>window.innerWidth&&(t.style.left=window.innerWidth-e.width+"px"),e.bottom>window.innerHeight&&(t.style.top=window.innerHeight-e.height+"px")},e.prototype.onLeftChange=function(t){this.setWindowRect({left:t}),this.onWindowMove(!1)},e.prototype.onTopChange=function(t){this.setWindowRect({top:t}),this.onWindowMove(!1)},e.prototype.onWidthChange=function(t){this.setWindowRect({width:t}),this.onWindowResize(!1)},e.prototype.onHeightChange=function(t){this.setWindowRect({height:t}),this.onWindowResize(!1)},e.prototype.setWindowRect=function(t){var e=t.width,n=t.height,i=t.top,o=t.left,r=this.windowElement();if(null!=e&&(r.style.width=e+"px"),null!=n){var s=v(this.titlebarElement()).height;r.style.height=n+s+"px"}null!=o&&(r.style.left=o+"px"),null!=i&&(r.style.top=i+"px")},e.prototype.initResizeHelper=function(){var t=this,e=r.naturalSize(this.titlebarElement()).height;this.resizableHelper=new a.ResizableHelper(this.windowElement(),{onResize:function(){return t.onWindowResize()},onResizeStart:function(){return t.$emit("resize-start")},onResizeEnd:function(){return t.$emit("resize-end")},minWidth:this.minWidth,minHeight:this.minHeight+e,maxWidth:this.maxWidth,maxHeight:this.maxHeight?this.maxHeight+e:void 0})},e.prototype.onWindowResize=function(t){void 0===t&&(t=!0);var e=this.windowElement(),n=this.titlebarElement(),i=this.contentElement(),o=v(i),r=o.width,s=o.height,a=v(e),u=a.width,l=a.height,h=v(n).height,p=u-(i.offsetWidth-r),c=l-h-(i.offsetHeight-s);i.style.width=p+"px",i.style.height=c+"px",g(),this.$emit("resize",new y(p,c)),t&&(this.$emit("update:width",p),this.$emit("update:height",c))},e.prototype.onWindowMove=function(t){void 0===t&&(t=!0),this.fixPosition();var e=this.windowElement().getBoundingClientRect(),n=e.left,i=e.top;t&&(this.$emit("update:left",n),this.$emit("update:top",i))},e.prototype.setInitialPosition=function(){var t,e,n=this,i=this.windowElement(),o=r.naturalSize(i),s=o.width,a=o.height;if(void 0!==this.left!=(void 0!==this.top))throw new Error("Either of left or top is specified. Both must be set or not set.");if("number"==typeof this.left)t=this.left,e=this.top;else{var u=this.positionHint||"auto";switch(u){case"auto":var l=20,h=50,p=0;do{if(c.every(function(t){if(!t.isOpen||n==t)return!0;var e=w(t);if(null==e)return!0;var i,o,r=e.left,s=e.top;return(i=r-l)*i+(o=s-h)*o>16}))break;l=(l+40)%(window.innerWidth-200),h=(h+40)%(window.innerHeight-200)}while(++p<100);t=l,e=h;break;case"center":t=(window.innerWidth-s)/2,e=(window.innerHeight-a)/2;break;default:try{var d=u.split("/").map(Number);if(2!=d.length)throw null;var f=d[0],v=d[1];if(!isFinite(f)||!isFinite(v))throw null;t=f>=0?f:window.innerWidth-s+f,e=v>=0?v:window.innerHeight-a+v}catch(t){throw new Error("invalid position string: "+u)}}}i.style.left=t+"px",i.style.top=e+"px"},e.prototype.closeButtonClick=function(){this.$emit("closebuttonclick"),this.$emit("update:isOpen",!1)},i.__decorate([o.Prop({type:Boolean,default:!0})],e.prototype,"isOpen",void 0),i.__decorate([o.Prop({type:String,default:""})],e.prototype,"title",void 0),i.__decorate([o.Prop({type:Boolean,default:!1})],e.prototype,"closeButton",void 0),i.__decorate([o.Prop({type:Boolean,default:!1})],e.prototype,"resizable",void 0),i.__decorate([o.Prop({type:Boolean,default:!1})],e.prototype,"isScrollable",void 0),i.__decorate([o.Prop({type:Number,default:8})],e.prototype,"padding",void 0),i.__decorate([o.Prop({type:Boolean,default:!0})],e.prototype,"activateWhenOpen",void 0),i.__decorate([o.Prop({type:String})],e.prototype,"positionHint",void 0),i.__decorate([o.Prop({type:Number,default:0})],e.prototype,"zGroup",void 0),i.__decorate([o.Prop({default:"visible"})],e.prototype,"overflow",void 0),i.__decorate([o.Inject(u.WINDOW_STYLE_KEY)],e.prototype,"windowStyle",void 0),i.__decorate([o.Watch("resizable")],e.prototype,"onResizableChange",null),i.__decorate([o.Watch("isOpen")],e.prototype,"onIsOpenChange",null),i.__decorate([o.Watch("zGroup")],e.prototype,"onZGroupChange",null),i.__decorate([o.Prop({type:Number})],e.prototype,"left",void 0),i.__decorate([o.Watch("left")],e.prototype,"onLeftChange",null),i.__decorate([o.Prop({type:Number})],e.prototype,"top",void 0),i.__decorate([o.Watch("top")],e.prototype,"onTopChange",null),i.__decorate([o.Prop({type:Number})],e.prototype,"width",void 0),i.__decorate([o.Watch("width")],e.prototype,"onWidthChange",null),i.__decorate([o.Prop({type:Number})],e.prototype,"height",void 0),i.__decorate([o.Watch("height")],e.prototype,"onHeightChange",null),i.__decorate([o.Prop({type:Number,default:1})],e.prototype,"minWidth",void 0),i.__decorate([o.Prop({type:Number,default:0})],e.prototype,"minHeight",void 0),i.__decorate([o.Prop({type:Number})],e.prototype,"maxWidth",void 0),i.__decorate([o.Prop({type:Number})],e.prototype,"maxHeight",void 0),e=i.__decorate([o.Component({components:{MyButton:p.default}})],e)}(o.Vue);function f(t){return null!==t?parseFloat(t):0}function v(t){var e=window.getComputedStyle(t);return{width:Math.ceil([e.paddingLeft,e.width,e.paddingRight].map(f).reduce(function(t,e){return t+e})),height:Math.ceil([e.paddingTop,e.height,e.paddingBottom].map(f).reduce(function(t,e){return t+e}))}}e.WindowType=d;var y=function(t,e){this.width=t,this.height=e};function w(t){var e=t.windowElement(),n=parseFloat(e.style.left||"NaN"),i=parseFloat(e.style.top||"NaN");return isNaN(n)||isNaN(i)?null:{left:n,top:i}}function g(){l.windows.forEach(function(t){t.fixPosition()})}e.WindowResizeEvent=y,e.fixPosition=g,window.addEventListener("resize",function(t){return g()})},function(t,e){t.exports=require("vue-property-decorator")},function(t,e,n){"use strict";function i(t){var e=t.getBoundingClientRect(),n=e.width,i=e.height,o=e.top,r=e.left;return{width:n,height:i,top:o,left:r,bottom:o+i,right:r+n}}Object.defineProperty(e,"__esModule",{value:!0}),e.naturalSize=function(t){var e=t.style,n=e.width,o=e.height;t.style.width="auto",t.style.height="auto";var r=i(t);return t.style.width=n,t.style.height=o,r},e.getRect=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.windows=new Set},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),u=null,l=0,h=[],p=n(28);function c(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(g(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),h.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return w(e,t.attrs),f(t,e),e}function w(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=l++;n=u||(u=y(e)),i=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",w(e,t.attrs),f(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=p(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return c(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&c(d(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var m,b=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e,n){t.exports=n(19)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),o=n(9);e.StyleBlack=o.StyleBlack,e.StyleWhite=o.StyleWhite,e.StyleMetal=o.StyleMetal,e.StyleFactory=o.StyleFactory;var r=n(12);e.WindowResizeEvent=r.WindowResizeEvent,e.fixPosition=r.fixPosition,e.install=function(t,e){void 0===e&&(e={prefix:"hsc-window"});var n=e.prefix;t.component(""+n,i.default),t.component(n+"-style-black",o.StyleBlack),t.component(n+"-style-white",o.StyleWhite),t.component(n+"-style-metal",o.StyleMetal)};var s=n(15);e.windows=s.windows,e.WindowType=i.default},function(t,e,n){"use strict";n.r(e);var i=n(10),o=n(0);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(29);var s=n(6),a=Object(s.a)(o.default,i.a,i.b,!1,null,null,null);a.options.__file="src/window/index.vue",e.default=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=function(){function t(t,e,n){var o=this;void 0===n&&(n={}),this.handle=t,this.container=e,this.options=n,this.mousedown=function(t){t.preventDefault();var e=o.handle.getBoundingClientRect(),n=e.left,r=e.top;o.offsetX=t.clientX-n,o.offsetY=t.clientY-r,o.options.onMoveStart&&o.options.onMoveStart(),o.unbindMove=i.SinglePointerEvent.bindMove(document,o.mousemove),o.unbindUp=i.SinglePointerEvent.bindUp(document,o.mouseup)},this.mousemove=function(t){o.container.style.left=t.clientX-o.offsetX+"px",o.container.style.top=t.clientY-o.offsetY+"px",o.options.onMove&&o.options.onMove()},this.mouseup=function(t){o.options.onMoveEnd&&o.options.onMoveEnd(),o.unbindUp(),o.unbindMove(),o.unbindUp=o.unbindMove=void 0},this.unbindDown=i.SinglePointerEvent.bindDown(t,this.mousedown),t.classList.add("draggable-handle")}return t.prototype.teardown=function(){this.handle.classList.remove("draggable-handle"),this.unbindDown(),this.unbindUp&&this.unbindUp(),this.unbindMove&&this.unbindMove()},t}();e.DraggableHelper=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),o=n(14),r=n(8),s=function(){function t(t,e){var n=this;this.container=t,this.options=e,this.handles=a.map(function(e){return new e(t,n)});var i=o.naturalSize(t),r=i.width,s=i.height,u=e.maxWidth||window.innerWidth,h=e.maxHeight||window.innerHeight,p=!1;(r<e.minWidth||r>u)&&(t.style.width=l(r,e.minWidth,u)+"px",p=!0),(s<e.minHeight||s>h)&&(t.style.height=l(s,e.minHeight,h)+"px",p=!0),p&&e.onResize&&e.onResize()}return t.prototype.teardown=function(){this.handles.forEach(function(t){return t.teardown()})},t}();e.ResizableHelper=s;var a=[],u=function(){function t(t,e){var n=this;this.container=t,this.helper=e,this.handleSize=8,this.mousedown=function(t){t.preventDefault(),t.stopPropagation();var e=o.getRect(n.container),i=e.left,s=e.top,a=e.width,u=e.height;n.x0=t.clientX,n.y0=t.clientY,n.left0=i,n.top0=s,n.width0=a,n.height0=u,n.calcSafeBoundaries(),n.helper.options.onResizeStart&&n.helper.options.onResizeStart(),n.unbindMove=r.SinglePointerEvent.bindMove(document,n.mousemove),n.unbindUp=r.SinglePointerEvent.bindUp(document,n.mouseup)},this.mousemove=function(t){t.preventDefault(),t.stopPropagation(),n.setPosition(t),n.fixPosition(),n.helper.options.onResize&&n.helper.options.onResize()},this.mouseup=function(t){t.preventDefault(),t.stopPropagation(),n.helper.options.onResizeEnd&&n.helper.options.onResizeEnd(),n.unbindUp(),n.unbindMove(),n.unbindUp=n.unbindMove=void 0},this.handle=this.createHandleElement(),this.unbindDown=r.SinglePointerEvent.bindDown(this.handle,this.mousedown)}return t.prototype.teardown=function(){this.unbindDown(),this.unbindUp&&this.unbindUp(),this.unbindMove&&this.unbindMove(),this.handle.parentElement.removeChild(this.handle)},t.prototype.calcSafeBoundaries=function(){var t=o.getRect(this.container),e=t.left,n=t.top,i=t.right,r=t.bottom,s=this.helper.options,a=s.maxWidth||window.innerWidth,u=s.maxHeight||window.innerHeight;this.minLeft=Math.max(i-a,0),this.maxLeft=i-s.minWidth,this.minRight=e+s.minWidth,this.maxRight=Math.min(e+a,window.innerWidth),this.minTop=Math.max(r-u,0),this.maxTop=r-s.minHeight,this.minBottom=n+s.minHeight,this.maxBottom=Math.min(n+u,window.innerHeight)},t.prototype.fixPosition=function(){var t=o.getRect(this.container),e=t.width,n=t.height,i=t.left,r=t.top,s=t.right,a=t.bottom,u=this.helper.options;i<this.minLeft?(this.container.style.width=e+i-this.minLeft+"px",this.container.style.left=this.minLeft+"px"):i>this.maxLeft?(this.container.style.width=u.minWidth+"px",this.container.style.left=this.maxLeft+"px"):s<this.minRight?this.container.style.width=u.minWidth+"px":s>this.maxRight&&(this.container.style.width=this.maxRight-i+"px"),r<this.minTop?(this.container.style.height=n+r-this.minTop+"px",this.container.style.top=this.minTop+"px"):r>this.maxTop?(this.container.style.height=u.minHeight+"px",this.container.style.top=this.maxTop+"px"):a<this.minBottom?this.container.style.height=u.minHeight+"px":a>this.maxBottom&&(this.container.style.height=this.maxBottom-r+"px")},t.prototype.createHandleElement=function(){var t=document.createElement("div"),e=t.style;return e.position="absolute",this.applyStyle(e),this.container.appendChild(t),t},t}();function l(t,e,n){return t<e?e:t>n?n:t}a.push(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.width=this.width0+t.clientX-this.x0+"px",this.container.style.height=this.height0+t.clientY-this.y0+"px"},e.prototype.applyStyle=function(t){t.width=2*this.handleSize+"px",t.height=2*this.handleSize+"px",t.right=-this.handleSize+"px",t.bottom=-this.handleSize+"px",t.cursor="nwse-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.height=this.height0+t.clientY-this.y0+"px"},e.prototype.applyStyle=function(t){t.right=this.handleSize+"px",t.left=this.handleSize+"px",t.height=2*this.handleSize+"px",t.bottom=-this.handleSize+"px",t.cursor="ns-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.left=this.left0+t.clientX-this.x0+"px",this.container.style.width=this.width0-(t.clientX-this.x0)+"px",this.container.style.height=this.height0+t.clientY-this.y0+"px"},e.prototype.applyStyle=function(t){t.left=-this.handleSize+"px",t.bottom=-this.handleSize+"px",t.width=2*this.handleSize+"px",t.height=2*this.handleSize+"px",t.cursor="nesw-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.left=this.left0+t.clientX-this.x0+"px",this.container.style.width=this.width0-(t.clientX-this.x0)+"px"},e.prototype.applyStyle=function(t){t.left=-this.handleSize+"px",t.bottom=this.handleSize+"px",t.width=2*this.handleSize+"px",t.top=this.handleSize+"px",t.cursor="ew-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.left=this.left0+t.clientX-this.x0+"px",this.container.style.width=this.width0-(t.clientX-this.x0)+"px",this.container.style.top=this.top0+t.clientY-this.y0+"px",this.container.style.height=this.height0-(t.clientY-this.y0)+"px"},e.prototype.applyStyle=function(t){t.left=-this.handleSize+"px",t.top=-this.handleSize+"px",t.width=2*this.handleSize+"px",t.height=2*this.handleSize+"px",t.cursor="nwse-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.top=this.top0+t.clientY-this.y0+"px",this.container.style.height=this.height0-(t.clientY-this.y0)+"px"},e.prototype.applyStyle=function(t){t.left=this.handleSize+"px",t.right=this.handleSize+"px",t.height=2*this.handleSize+"px",t.top=-this.handleSize+"px",t.cursor="ns-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.top=this.top0+t.clientY-this.y0+"px",this.container.style.height=this.height0-(t.clientY-this.y0)+"px",this.container.style.width=this.width0+t.clientX-this.x0+"px"},e.prototype.applyStyle=function(t){t.right=-this.handleSize+"px",t.top=-this.handleSize+"px",t.height=2*this.handleSize+"px",t.width=2*this.handleSize+"px",t.cursor="nesw-resize"},e}(u),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.setPosition=function(t){this.container.style.width=this.width0+t.clientX-this.x0+"px"},e.prototype.applyStyle=function(t){t.right=-this.handleSize+"px",t.top=this.handleSize+"px",t.bottom=this.handleSize+"px",t.width=2*this.handleSize+"px",t.cursor="ew-resize"},e}(u))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var n=this;this._group=t,this.onChange=e,this.a(function(t){return t.push(n)})}return Object.defineProperty(t.prototype,"group",{get:function(){return this._group},set:function(t){this._group=t;var e=s(this._group),n=s(t);e.splice(e.indexOf(this),1),n.push(this),u()},enumerable:!0,configurable:!0}),t.prototype.unregister=function(){var t=this;this.a(function(e){return e.splice(e.indexOf(t),1)})},t.prototype.raise=function(){var t=this;this.a(function(e){e.splice(e.indexOf(t),1),e.push(t)})},t.prototype.a=function(t){t(s(this._group)),u()},t}();e.ZElement=i;var o=new Map,r=0;function s(t){return o.has(t)||o.set(t,[]),o.get(t)}function a(t,e){return t>e?-a(e,t):t<0&&e>=0?1:t-e}function u(){for(var t=r,e=0,n=function(t){var e=[];return t.forEach(function(t,n){return e.push(n)}),e}(o).sort(a);e<n.length;e++)for(var i=0,u=s(n[e]);i<u.length;i++){var l=u[i];t!=l.zIndex&&(l.zIndex=t,l.onChange(t)),t++}}},function(t,e,n){"use strict";n.r(e);var i=n(11),o=n(2);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(26);var s=n(6),a=Object(s.a)(o.default,i.a,i.b,!1,null,"46a594e4",null);a.options.__file="src/button/index.vue",e.default=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),o=n(9),r=n(13),s=n(8),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hover=!1,e.active=!1,e}return i.__extends(e,t),Object.defineProperty(e.prototype,"style",{get:function(){var t=this.windowStyle.button;return this.hover&&(t=i.__assign({},t,this.windowStyle.buttonHover)),this.active&&(t=i.__assign({},t,this.windowStyle.buttonActive)),t},enumerable:!0,configurable:!0}),e.prototype.mousedown=function(t){var e=this;t.preventDefault(),this.active=!0;var n=s.SinglePointerEvent.bindUp(document,function(){e.active=!1,n()})},e.prototype.mouseup=function(t){this.active&&this.$emit("click")},i.__decorate([r.Inject(o.WINDOW_STYLE_KEY)],e.prototype,"windowStyle",void 0),i.__decorate([r.Prop({type:Boolean,default:!1})],e.prototype,"disabled",void 0),e=i.__decorate([r.Component],e)}(r.Vue);e.Button=a},function(t,e,n){"use strict";var i=n(4);n.n(i).a},function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".button[data-v-46a594e4] {\n  background-color: transparent;\n  border: none;\n  font-size: medium;\n  margin: 0;\n  padding: 0 0.25em;\n  border-radius: 4pt;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";var i=n(5);n.n(i).a},function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"#window-201909055405.window {\n  display: flex;\n  flex-flow: column;\n  position: fixed;\n  border-radius: 4pt 4pt 0 0;\n}\n#window-201909055405.titlebar {\n  display: flex;\n  flex-flow: row nowrap;\n  border-radius: 4pt 4pt 0 0;\n  font-family: sans-serif;\n  padding: 0.5em;\n  flex: 0 0 auto;\n}\n#window-201909055405.title {\n  flex-grow: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#window-201909055405.content {\n  flex-grow: 1;\n  padding: 0.5em;\n}\n#window-201909055405.draggable-handle {\n  cursor: move;\n}\n#window-201909055405.fade-enter, #window-201909055405.fade-leave-to {\n  opacity: 0;\n  transform: scale(0.9);\n}\n#window-201909055405.fade-enter-active, #window-201909055405.fade-leave-active {\n  transition: 0.2s;\n}\n",""])}]));