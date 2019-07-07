(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LoopRoll"] = factory();
	else
		root["LoopRoll"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "b051":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopRoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d395");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopRoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopRoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoopRoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d395":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"286e595c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoopRoll/LoopRoll.vue?vue&type=template&id=db3e4620&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"LoopRoll"},[_c('img',{attrs:{"src":_vm.img,"alt":"","srcset":""}}),_c('div',{staticClass:"list"},[_c('div',{staticClass:"cc rowup"},_vm._l((_vm.items),function(item,index){return _c('div',{key:index,staticClass:"item"},[_vm._v(_vm._s(item))])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoopRoll/LoopRoll.vue?vue&type=template&id=db3e4620&

// CONCATENATED MODULE: ./src/components/LoopRoll/img.js
/* harmony default export */ var img = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a\nHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy\nMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACgAHgDASIA\nAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA\nAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3\nODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm\np6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA\nAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx\nBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK\nU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3\nuLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzwPuO\nCTn607c3Z2+mahB65pevSqM7Di7jqT+BprNuH3s/jSFiOBzTSy7Tkc0hjHViDhiPxqEhweSfzqYn\n0b8DTS2DyKdx2K5ds9Tj60ZIG7JB7c1MVVqYygHJwfY1LCxCN+eSTn3qQE4+8Se/NAwOT1pr7cE0\nBYUuVz85A+tC72Odxx9ahHzng9PWp4xt5PWmFi9abgy5Y/nXrHw/0Z7yVHYMFyDya820SyN3OpI+\nUHmvc/BF1ZadAVlYqxXCnbwKXNG9mNxbVzvoIEt4lRAAAKKypNeiORGDj1NFRzxQ+V9j5UOc4Hal\nBGM0zBzTieAMdKu5NhpGelNf6ZAp/AGe9MOexpXAjOAM9PSmZbPBzTmIPUU0jAIB5phYTcGJ44He\n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\nw+RRVdW4FFQan//Z");
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoopRoll/LoopRoll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LoopRollvue_type_script_lang_js_ = ({
  name: "LoopRoll",
  data: function data() {
    return {
      img: img,
      items: ["1- 121233fffffr国家认可更健康进口价格困扰", "2- 3123233", "3- 个人口结构俄跨入国际科技馆客人感觉", "4- ggrgerg", "5- fvdgdv", "6- 德国南部巴士与卡车相撞起火 31人受伤11人死亡朴槿惠庭审时突然昏迷 支持者：她死了法官要负责！"]
    };
  },
  props: ["name"],
  methods: {},
  mounted: function mounted() {
    this.$slots = this.defaultSlot;
  }
});
// CONCATENATED MODULE: ./src/components/LoopRoll/LoopRoll.vue?vue&type=script&lang=js&
 /* harmony default export */ var LoopRoll_LoopRollvue_type_script_lang_js_ = (LoopRollvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/LoopRoll/LoopRoll.vue?vue&type=style&index=0&lang=scss&
var LoopRollvue_type_style_index_0_lang_scss_ = __webpack_require__("b051");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/LoopRoll/LoopRoll.vue






/* normalize component */

var component = normalizeComponent(
  LoopRoll_LoopRollvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoopRoll = (component.exports);
// CONCATENATED MODULE: ./src/components/LoopRoll/index.js



LoopRoll.install = function (Vue) {
  if (LoopRoll.installed) return;
  Vue.component(LoopRoll.name, LoopRoll);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LoopRoll);
}

if (window) {
  window.componentList = window.componentList || {};
  window.componentList.LoopRoll = LoopRoll;
}

/* harmony default export */ var components_LoopRoll = (LoopRoll);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components_LoopRoll);



/***/ })

/******/ })["default"];
});