/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/json.js!./lib/style.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!***************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\index\index.css ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".container": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "left": "0px",
    "top": "0px",
    "width": "454px",
    "height": "454px"
  },
  ".title": {
    "fontSize": "30px",
    "textAlign": "center",
    "width": "200px",
    "height": "100px"
  },
  ".btn": {
    "fontSize": "38px",
    "color": "#409EFF",
    "backgroundColor": "#000000"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!******************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\index\index.hml ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "className": "title",
        "value": function () {return this.title}
      },
      "type": "text",
      "classList": [
        "title"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:5",
        "type": "button",
        "value": "开始",
        "className": "btn"
      },
      "type": "input",
      "classList": [
        "btn"
      ],
      "events": {
        "click": "clickStart"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  target = requireNapi(shortName);
  if (typeof target !== 'undefined' && /@ohos/.test(moduleName)) {
    return target;
  }
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  return target;
}


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\index\index.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireModule("@system.router"));

var _default = {
  data: {
    title: '井字棋'
  },
  clickStart: function clickStart() {
    _system["default"].replace({
      uri: 'pages/game/game'
    });
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  target = requireNapi(shortName);
  if (typeof target !== 'undefined' && /@ohos/.test(moduleName)) {
    return target;
  }
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************************************************************************!*\
  !*** C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\index\index.hml?entry ***!
  \****************************************************************************************************************/
var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=index.js.map