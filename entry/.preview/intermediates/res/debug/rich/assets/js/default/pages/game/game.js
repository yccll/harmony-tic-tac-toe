/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/json.js!./lib/style.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\game\\game.css":
/*!*************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\game\game.css ***!
  \*************************************************************************************************************************************/
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
  ".marquee": {
    "color": "#67C23A"
  },
  ".btn": {
    "color": "#409EFF",
    "backgroundColor": "#000000",
    "height": "80px"
  },
  ".btn-reset": {
    "marginTop": "100px",
    "width": "200px",
    "color": "#F56C6C",
    "backgroundColor": "#000000"
  },
  ".board": {
    "width": "300px",
    "height": "300px",
    "display": "flex",
    "flexDirection": "column",
    "marginTop": "50px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopColor": "#999999",
    "borderRightColor": "#999999",
    "borderBottomColor": "#999999",
    "borderLeftColor": "#999999"
  },
  ".board-row": {
    "width": "300px",
    "height": "100px",
    "display": "flex",
    "flexDirection": "row"
  },
  ".square": {
    "backgroundColor": "#000000",
    "borderTopColor": "#999999",
    "borderRightColor": "#999999",
    "borderBottomColor": "#999999",
    "borderLeftColor": "#999999",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderBottomLeftRadius": "0px",
    "borderBottomRightRadius": "0px",
    "borderTopLeftRadius": "0px",
    "borderTopRightRadius": "0px",
    "height": "100px",
    "width": "100px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\game\\game.hml":
/*!****************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\game\game.hml ***!
  \****************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "attr": {
    "debugLine": "pages/game/game:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/game/game:2",
        "className": "marquee",
        "value": function () {return decodeURI('%E8%8E%B7%E8%83%9C%E8%80%85:%20') + (this.winner) + decodeURI('%20!')}
      },
      "type": "marquee",
      "classList": [
        "marquee"
      ],
      "shown": function () {return this.hasResult}
    },
    {
      "attr": {
        "debugLine": "pages/game/game:3",
        "className": "board"
      },
      "type": "div",
      "classList": [
        "board"
      ],
      "shown": function () {return !this.hasResult},
      "children": [
        {
          "attr": {
            "debugLine": "pages/game/game:4",
            "className": "board-row"
          },
          "type": "div",
          "classList": [
            "board-row"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/game/game:5",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[0]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(0,evt)}
              }
            },
            {
              "attr": {
                "debugLine": "pages/game/game:6",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[1]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(1,evt)}
              }
            },
            {
              "attr": {
                "debugLine": "pages/game/game:7",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[2]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(2,evt)}
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/game/game:9",
            "className": "board-row"
          },
          "type": "div",
          "classList": [
            "board-row"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/game/game:10",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[3]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(3,evt)}
              }
            },
            {
              "attr": {
                "debugLine": "pages/game/game:11",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[4]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(4,evt)}
              }
            },
            {
              "attr": {
                "debugLine": "pages/game/game:12",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[5]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(5,evt)}
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/game/game:14",
            "className": "board-row"
          },
          "type": "div",
          "classList": [
            "board-row"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/game/game:15",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[6]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(6,evt)}
              }
            },
            {
              "attr": {
                "debugLine": "pages/game/game:16",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[7]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(7,evt)}
              }
            },
            {
              "attr": {
                "debugLine": "pages/game/game:17",
                "type": "button",
                "className": "square",
                "value": function () {return this.squareValues[8]}
              },
              "type": "input",
              "classList": [
                "square"
              ],
              "events": {
                "click": function (evt) {this.clickSquare(8,evt)}
              }
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/game/game:20",
        "className": "btn-reset",
        "value": "重新开始"
      },
      "type": "input",
      "shown": function () {return this.hasResult},
      "classList": [
        "btn-reset"
      ],
      "events": {
        "click": "clickReset"
      }
    },
    {
      "attr": {
        "debugLine": "pages/game/game:22",
        "className": "btn",
        "value": "返回"
      },
      "type": "input",
      "classList": [
        "btn"
      ],
      "events": {
        "click": "clickBack"
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

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\game\\game.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\game\game.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault(requireModule("@system.router"));

var _default = {
  data: {
    squareValues: [],
    flag: true,
    winner: null,
    hasResult: false
  },
  onInit: function onInit() {
    this.winner = null;
    this.hasResult = false;
    this.flag = true;
    this.squareValues = ['', '', '', '', '', '', '', '', ''];
  },
  clickReset: function clickReset() {
    this.winner = null;
    this.flag = true;
    this.squareValues = ['', '', '', '', '', '', '', '', ''];
    this.hasResult = false;
    this.fullNumber = 0;
  },
  clickBack: function clickBack() {
    _system["default"].replace({
      uri: 'pages/index/index'
    });
  },
  clickSquare: function clickSquare(value) {
    var _this = this;

    if (this.calculateWinner(this.squareValues) || this.squareValues[value]) {
      return;
    }

    var squares = this.squareValues;
    squares[value] = this.flag ? 'O' : 'X';
    this.flag = !this.flag;
    this.winner = this.calculateWinner(squares);

    if (this.winner) {
      setTimeout(function () {
        (0, _newArrowCheck2["default"])(this, _this);
        this.hasResult = true;
      }.bind(this), 500);
    }
  },
  calculateWinner: function calculateWinner(squares) {
    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (var i = 0; i < lines.length; i++) {
      var array = lines[i];
      var a = array[0];
      var b = array[1];
      var c = array[2];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    var num = 0;

    for (var j = 0; j < squares.length; j++) {
      var item = squares[j];

      if (item) {
        num++;
      }
    }

    if (num === 9) {
      return '无';
    }

    return null;
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
/*!**************************************************************************************************************!*\
  !*** C:\Users\Administrator\Desktop\harmony-tic-tac-toe\entry\src\main\js\default\pages\game\game.hml?entry ***!
  \**************************************************************************************************************/
var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./game.hml */ "./lib/json.js!./lib/template.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\game\\game.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./game.css */ "./lib/json.js!./lib/style.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\game\\game.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\dev\HarmonyOS\js\3.0.0.5\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./game.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\dev\\HarmonyOS\\js\\3.0.0.5\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:\\Users\\Administrator\\Desktop\\harmony-tic-tac-toe\\entry\\src\\main\\js\\default\\pages\\game\\game.js")

$app_define$('@app-component/game', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/game',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=game.js.map