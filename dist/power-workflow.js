(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["coverNumber"] = factory();
	else
		root["coverNumber"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerManger_1 = __importDefault(__webpack_require__(6));
class RegisterBehavior extends registerManger_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = '';
    }
    register(events = {}) {
        const self = this;
        this.G6.registerBehavior(this.name, Object.assign({ getEvents: this.getEvents }, events));
    }
    getEvents() {
        return {};
    }
}
exports.default = RegisterBehavior;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerNode_1 = __webpack_require__(14);
const nodeStyle_1 = __importDefault(__webpack_require__(2));
const AnchorItem_1 = __importDefault(__webpack_require__(10));
const stateList = {
    'hoverNode': function (item, value) {
        const group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        const group = item.getContainer();
        const current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        const group = item.get('group');
        const nodeModel = item.getModel();
        if (value === 'hide') {
            const startPos = nodeModel.startPos;
            const endPos = nodeModel.endPos;
            const distanceX = Math.abs(endPos.x - startPos.x);
            const distanceY = Math.abs(endPos.Y - startPos.Y);
            let disX = 20 / 1000 * distanceX;
            let disY = 20 / 1000 * distanceY;
            let startX = nodeModel.startPos.x;
            let startY = nodeModel.startPos.x;
            let inc = setInterval(() => {
                if (startX < endPos.x) {
                    clearInterval(inc);
                }
                item.update({
                    x: startX -= disX,
                    y: startY -= disY
                });
            }, 20);
        }
        else {
        }
    }
};
const calcStrLen = function calcStrLen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
};
class BaseNode extends registerNode_1.RegisterNode {
    constructor(Grid, extendsed = false) {
        super(Grid);
        this.name = 'base-node';
        this.size = { width: 180, height: 70 };
        this.canvas = null;
        if (!extendsed)
            this.register();
    }
    draw(cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        const keyShape = this.drawKeyShape(cfg, group);
        return keyShape;
    }
    afterDraw(cfg, group, inc) {
    }
    updateShape(group, _a) {
        var { index = 0 } = _a, props = __rest(_a, ["index"]);
        const currentShape = group.getChildByIndex(index);
        currentShape.attr(props);
    }
    getTextWidth(text) {
        this.canvas = this.canvas || document.createElement("canvas");
        var context = this.canvas.getContext("2d");
        context.font = "10px";
        var metrics = context.measureText(text);
        return metrics.width - text.length * 2;
    }
    getTextWidth1(fontSize, text) {
        var span = document.createElement("span");
        span.style.fontSize = fontSize;
        var result = {};
        result.width = span.offsetWidth;
        result.height = span.offsetWidth;
        span.style.visibility = "hidden";
        document.body.appendChild(span);
        if (typeof span.textContent != "undefined")
            span.textContent = text;
        else
            span.innerText = text;
        result = span.offsetWidth - result.width;
        span.parentNode.removeChild(span);
        return result - text.length * 1.5;
    }
    getTextWidth2(fontSize, text) {
        const fontWidth = fontSize;
        var width = this.calcStrLen(text) * fontWidth;
        return width / 2;
    }
    calcStrLen(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
                len = ++len + 0.2;
            }
            else {
                len += 2;
            }
        }
        return len;
    }
    ;
    withByContain(width, fontSize) {
        const fontWidth = fontSize;
        return width * 2 / fontWidth;
    }
    textWidthToEllipsis({ text, threshold = 4, width = this.size.width, fontSize = 12 }) {
        const containCharacter = this.withByContain(width, fontSize) - threshold;
        let finalText = '';
        let len = 0;
        for (var i = 0; i < text.length; i++) {
            if (text.charCodeAt(i) > 0 && text.charCodeAt(i) < 128) {
                len++;
            }
            else {
                len += 2;
            }
            if (len > containCharacter) {
                finalText += '...';
                break;
            }
            ;
            finalText += text[i];
        }
        return finalText;
    }
    drawKeyShape(cfg, group) {
        let width = this.size.width;
        let height = this.size.height;
        const { style = {} } = cfg;
        const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.base.origin), { width,
            height }), style);
        const keyShape = group.addShape('rect', {
            attrs: attrs,
            name: 'base-node',
            className: 'base-node'
        });
        this.initAnchor(group);
        return keyShape;
    }
    initAnchor(group, cfg = {}) {
        group.anchorShapes = [];
        group.showAnchor = () => {
            this.drawAnchor(group, cfg);
        };
        group.clearAnchor = () => {
            this.clearAnchor(group);
        };
    }
    drawAnchor(group, cfg = {}) {
        const bbox = group.get('children')[0].getBBox();
        this.getAnchorPoints(cfg).forEach((point, index) => {
            const anchorContainer = group.addGroup();
            new AnchorItem_1.default({
                group: anchorContainer,
                index: index,
                model: {
                    style: {
                        x: bbox.minX + bbox.width * point[0],
                        y: bbox.minY + bbox.height * point[1]
                    }
                }
            });
            group.anchorShapes.push(anchorContainer);
        });
    }
    clearAnchor(group) {
        group.anchorShapes && group.anchorShapes.forEach(a => a.remove());
        group.anchorShapes = [];
    }
    computeNodeSize(cfg) {
        let size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
        let width = size[0] ? size[0] : 180;
        let height = size[1] ? size[1] : 70;
        return { width, height };
    }
    getAnchorPoints(cfg) {
        return [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
        ];
    }
    setState(name, value, item) {
        stateList[name] && stateList[name].call(this, item, value);
    }
}
exports.default = BaseNode;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    default: {
        cursor: 'move'
    },
    base: {
        origin: {
            fill: '#C7E4FF',
            stroke: '#61B3FF',
            opacity: 0.6,
            lineWidth: 2,
            radius: 8,
            cursor: 'move'
        }
    },
    leftText: {
        origin: {
            fill: '#014445',
            fontSize: 12,
            x: 12,
            y: 12,
            textBaseline: 'middle'
        }
    },
    titleText: {
        origin: {
            fontSize: 14,
            stroke: '#2E4553',
            textBaseline: 'middle',
            textAlign: "center",
            cursor: 'move'
        }
    },
    statusShape: {
        r: 3,
        text: {
            textBaseline: 'middle',
            textAlign: "center",
            fontSize: 12,
        },
        origin: {
            fill: '#00BB2F',
        },
        success: {
            fill: '#00BB2F',
        },
        waiting: {
            fill: '#FE9201',
        },
        underway: {
            fill: '#1990FF',
        },
        faild: {
            fill: '#CA0101'
        },
        stop: {
            fill: '#72007B'
        }
    },
    rightText: {
        origin: {
            fill: '#014445',
            fontSize: 12,
            textBaseline: 'middle',
            textAlign: "right",
        }
    }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@antv/util");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-pc");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RegisterManger {
    constructor(G6) {
        this.extendedName = null;
        this.G6 = G6;
    }
    register(events) {
        this.G6[this.registerType](this.name, {}, this.extendedName);
    }
}
exports.default = RegisterManger;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const g6_1 = __importStar(__webpack_require__(13));
const BaseNode_1 = __importDefault(__webpack_require__(1));
const FlowNode_1 = __importDefault(__webpack_require__(16));
const SimpleNode_1 = __importDefault(__webpack_require__(17));
const nodes_1 = __importDefault(__webpack_require__(18));
const CircleNode_1 = __importDefault(__webpack_require__(23));
const CvtePolyline_1 = __importDefault(__webpack_require__(24));
const CvtePolyline1_1 = __importDefault(__webpack_require__(26));
const circle_1 = __importDefault(__webpack_require__(27));
const BaseAnchor_1 = __importDefault(__webpack_require__(28));
const behavior_1 = __importDefault(__webpack_require__(31));
const config_1 = __webpack_require__(42);
const Util_1 = __webpack_require__(43);
const gird = new g6_1.default.Grid({});
class CvteWorkflow {
    constructor({ container, width = window.innerWidth, height = window.innerHeight, plugins = [], mode = "view", initEdges = [], initNodes = [], registerNodes = [], edgeCallback, layout, registerNodeList, animate = false, registerEdgeList = [], registerBehaviors = [], diffHeight = 0, diffWidth = 0, treeGroup = false, layoutParams = {}, defaultNode = {}, defaultEdge = {}, modes = {} }) {
        this.treeGroup = false;
        this.animate = false;
        this.registerEdgeList = [];
        this.registerBehaviors = [];
        this.diffHeight = 0;
        this.diffWidth = 0;
        this.layoutParams = {};
        this.util = new Util_1.FlowUtil();
        this.registerNodeByFront = () => {
            this.registerNodeList.forEach((item) => {
                const { nodeDesc } = item;
                this.G6.registerNode(item.nodeName, {
                    drawKeyShape(cfg, group) {
                        let keyShape = null;
                        nodeDesc.forEach((node, index) => {
                            if (index === 0) {
                                keyShape = this.reloadDrawKeyShape(cfg, group, node);
                            }
                            else {
                                this.reloadDrawKeyShape(cfg, group, node);
                            }
                        });
                        return keyShape;
                    },
                    reloadDrawKeyShape(cfg, group, node) {
                        let { type, name } = node, attrs = __rest(node, ["type", "name"]);
                        let other = {};
                        if (attrs.mainShape) {
                            other = {
                                width: this.size.width,
                                height: this.size.height
                            };
                        }
                        attrs = Object.assign(Object.assign({}, attrs), other);
                        return group.addShape(type, {
                            attrs,
                            name
                        });
                    }
                }, 'simple-node');
            });
        };
        this.reloadDrawKeyShape = (cfg, group, node) => {
            let { type, name } = node, attrs = __rest(node, ["type", "name"]);
            return group.addShape(type, {
                attrs,
                name
            });
        };
        this.edgeEndCallback = (sourceNode, targetNode) => {
            if (!this.edgeCallback)
                return true;
            return this.edgeCallback(sourceNode, targetNode);
        };
        this.container = container;
        const check = this.checkProps();
        if (!check)
            return;
        this.width = width;
        this.height = height;
        this.plugins = plugins;
        this.mode = mode;
        this.initEdges = initEdges;
        this.initNodes = initNodes;
        this.G6 = g6_1.default;
        this.registerNodes = registerNodes;
        this.edgeCallback = edgeCallback;
        this.layout = layout ? Object.assign(Object.assign({}, config_1.layoutSetting[layout]), layoutParams) : null;
        this.registerNodeList = registerNodeList || [];
        this.animate = animate;
        this.registerEdgeList = registerEdgeList;
        this.registerBehaviors = registerBehaviors;
        this.diffWidth = diffWidth;
        this.diffHeight = diffHeight;
        this.treeGroup = treeGroup;
        new BaseAnchor_1.default(g6_1.default);
        this.initRegister();
        this.init(defaultNode, defaultEdge, modes);
        if (this.diffHeight || this.diffWidth) {
            window.addEventListener('resize', this.util.debounce(() => this.autoSize, 50));
        }
    }
    init(defaultNode, defaultEdge, modes) {
        if (this.treeGroup) {
            this.graph = new g6_1.TreeGraph({
                container: this.container,
                width: this.width,
                height: this.height,
                enabledStack: true,
                plugins: [...this.plugins],
                modes: this.initMode(),
                layout: {
                    type: 'indented',
                    direction: 'LR',
                    dropCap: false,
                    indent: 300,
                    getHeight: () => {
                        return 60;
                    },
                },
                animate: this.animate,
                defaultNode: {
                    type: 'tree-node'
                },
                defaultEdge: {
                    type: 'cover-cricle'
                }
            });
            const handleCollapse = (e) => {
                const target = e.target;
                const id = target.get('modelId');
                const item = this.graph.findById(id);
                const nodeModel = item.getModel();
                nodeModel.collapsed = !nodeModel.collapsed;
                this.graph.layout();
                this.graph.setItemState(item, 'collapse', nodeModel.collapsed);
            };
            this.graph.on('collapse-text:click', (e) => {
                handleCollapse(e);
            });
            this.graph.on('collapse-back:click', (e) => {
                handleCollapse(e);
            });
        }
        else {
            this.graph = new g6_1.Graph({
                container: this.container,
                width: this.width,
                height: this.height,
                enabledStack: true,
                plugins: [...this.plugins],
                modes: this.initMode(modes),
                layout: this.layout,
                animate: this.animate,
                defaultNode: Object.assign({ type: 'flow-node' }, defaultNode),
                defaultEdge: Object.assign({ type: 'cvte-polyline' }, defaultEdge)
            });
        }
        if (this.mode) {
            this.graph.setMode(this.mode);
        }
        this.graph.set('edgeEndCallback', this.edgeEndCallback);
        document.addEventListener('click', (e) => {
            if (e.target['nodeName'] === 'CANVAS') {
                return;
            }
            this.graph.set('noKeyDown', true);
        });
        this.initData();
    }
    changeMode() { }
    getWorkflowData() { }
    onSelectedItem() { }
    addNode() { }
    addEdge() { }
    checkProps() {
        if (!this.container) {
            new Error("container is required!");
            return false;
        }
        return true;
    }
    initMode(modes = {}) {
        if (this.treeGroup) {
            return Object.assign({ default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }], edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'], view: ['drag-canvas', 'cover-select-node'] }, modes);
        }
        return Object.assign({ default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }], edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'], view: ['drag-canvas', 'cover-select-node'] }, modes);
    }
    initData() {
        const data = {
            nodes: this.initNodes,
            edges: this.initEdges
        };
        this.graph.data(data);
        this.graph.render();
        if (this.layout && this.animate) {
            console.log('我是la');
            setTimeout(() => {
                this.graph.layout();
            }, 200);
        }
    }
    initRegister() {
        [...nodes_1.default, BaseNode_1.default, FlowNode_1.default, ...this.registerNodes].forEach(SelfNode => {
            new SelfNode(this.G6);
        });
        [...behavior_1.default, ...this.registerBehaviors].forEach(Behavior => {
            new Behavior(this.G6);
        });
        [CvtePolyline_1.default].forEach(SelfNode => {
            new SelfNode(this.G6);
        });
        this.registerSideEdge();
        CvtePolyline1_1.default(g6_1.default);
        circle_1.default(g6_1.default);
        SimpleNode_1.default(g6_1.default);
        CircleNode_1.default(g6_1.default);
    }
    autoSize() {
        const width = window.innerWidth - this.diffWidth;
        const height = window.innerHeight - this.diffHeight;
        this.changeSize(width, height);
    }
    setData(data) {
        this.graph.data(data);
        this.graph.render();
    }
    setMode(mode) {
        this.graph.setMode(mode);
    }
    changeSize(width, height) {
        this.graph.changeSize(width, height);
    }
    on(eventName, handler) {
        this.graph.on(eventName, handler);
    }
    fitView(size = 20) {
        this.graph.fitView(size);
    }
    fitCenter() {
        this.graph.fitCenter();
    }
    registerSideEdge() {
        this.registerEdgeList.forEach(item => {
            const { name, extended, register } = item;
            if (extended) {
                this.G6.registerEdge(name, register, extended);
            }
            else {
                this.G6.registerEdge(name, register);
            }
        });
    }
}
exports.default = CvteWorkflow;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(__webpack_require__(15));
const util_1 = __webpack_require__(3);
class Anchor extends item_1.default {
    constructor(props) {
        super(util_1.deepMix(props, {
            type: "anchor",
            isActived: true,
            model: {
                type: "anchor",
                style: {
                    r: 4,
                    fill: "#fff",
                    shadowBlur: 4,
                    shadowColor: "#666",
                    cursor: "crosshair"
                }
            }
        }));
        this.enableCapture(true);
        this.isAnchor = true;
        this.toFront();
    }
    showHotpot() {
        this.hotpot = this.getContainer().addShape('marker', {
            attrs: Object.assign(Object.assign({}, this.get('model').style), { r: 12, fill: '#1890FF', fillOpacity: .25 }),
            name: 'hotpot-shape',
            draggable: true,
        });
        this.hotpot.toFront();
    }
    setHotspotActived(active) {
        this.hotpot && active && this.hotpot.attr ? this.hotpot.attr && this.hotpot.attr({ r: 14, fill: '#0084FF' }) : this.hotpot.attr && this.hotpot.attr({ r: 12, fill: '#1890FF' });
    }
}
exports.default = Anchor;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MacroCommand {
    constructor() {
        this.commands = {};
    }
    registerCommand(name, Command) {
        if (this.commands[name])
            new Error(`the ${name} command already exists`);
        this.commands[name] = Command;
    }
    executeCommand(name, cfg) {
        this.commands[name] && this.commands[name].execute(cfg);
    }
}
exports.default = new MacroCommand();


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Workflow_1 = __webpack_require__(9);
Object.defineProperty(exports, "Workflow", { enumerable: true, get: function () { return Workflow_1.default; } });
const Flow_1 = __importDefault(__webpack_require__(44));
var BaseNode_1 = __webpack_require__(1);
Object.defineProperty(exports, "BaseNode", { enumerable: true, get: function () { return BaseNode_1.default; } });
var registerBehavior_1 = __webpack_require__(0);
Object.defineProperty(exports, "RegisterBehavior", { enumerable: true, get: function () { return registerBehavior_1.default; } });
var Toolbar_1 = __webpack_require__(69);
Object.defineProperty(exports, "ToolGroup", { enumerable: true, get: function () { return Toolbar_1.ToolGroup; } });
Object.defineProperty(exports, "ToolItem", { enumerable: true, get: function () { return Toolbar_1.ToolItem; } });
exports.default = Flow_1.default;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _antv_g6_pc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _antv_g6_pc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_antv_g6_pc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _antv_g6_pc__WEBPACK_IMPORTED_MODULE_0__) if(["default","version"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _antv_g6_pc__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));

_antv_g6_pc__WEBPACK_IMPORTED_MODULE_0___default.a.version = '4.2.5';

/* harmony default export */ __webpack_exports__["default"] = (_antv_g6_pc__WEBPACK_IMPORTED_MODULE_0___default.a);
var version = '4.2.5';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterNode = void 0;
const registerManger_1 = __importDefault(__webpack_require__(6));
class RegisterNode extends registerManger_1.default {
    constructor(G6) {
        super(G6);
        this.name = '';
        this.extendedName = '';
    }
    register() {
        const self = this;
        this.G6.registerNode(this.name, {
            draw: function (cfg, group) {
                return self.draw.call(self, cfg, group, this);
            },
            afterDraw: function (cfg, group) {
                return self.afterDraw.call(self, cfg, group, this);
            },
            update: function (cfg, group) {
                self.update.call(self, cfg, group, this);
            },
            afterUpdate: function (cfg, group) {
                self.afterUpdate.call(self, cfg, group, this);
            },
            setState: function (name, value, item) {
                self.setState.call(self, name, value, item, this);
            },
            getAnchorPoints: function (cfg) {
                return self.getAnchorPoints.call(self, cfg, this);
            },
            drawAnchor: function () {
                return self.drawAnchor && self.drawAnchor.apply(self, arguments);
            },
            test: () => { }
        }, this.extendedName);
    }
    ;
    draw(cfg, group, inc) {
        const keyShape = group.addShape('rect', {
            attrs: {
                width: 170,
                height: 70,
                fill: '#C7E4FF',
                stroke: '#61B3FF',
                opacity: 0.6,
                lineWidth: 2,
                radius: 8,
                cursor: 'move'
            },
            name: 'power-rect-node',
            className: 'base-node'
        });
        return keyShape;
    }
    ;
    update(cfg, group, inc) { }
    ;
    afterUpdate(cfg, group, inc) { }
    ;
    afterDraw(cfg, group, inc) { }
    setState(name, value, item, inc) { }
    ;
    drawAnchor(group) { }
    getAnchorPoints(cfg, inc) {
        return [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
        ];
    }
}
exports.RegisterNode = RegisterNode;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-core/lib/item/item");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseNode_1 = __importDefault(__webpack_require__(1));
const nodeStyle_1 = __importDefault(__webpack_require__(2));
class FlowNode extends BaseNode_1.default {
    constructor(Grid) {
        super(Grid, true);
        this.name = 'flow-node';
        this.register();
    }
    draw(cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        const keyShape = this.drawKeyShape(cfg, group);
        this.drawLeftText(cfg, group);
        this.drawTitleText(cfg, group);
        this.drawIcon(cfg.icon1, group, 6);
        this.drawIcon(cfg.icon2, group, 24);
        this.drawRightText(cfg, group);
        this.drawStatusShape(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    }
    afterDraw(cfg, group) {
        if (cfg.taskStatusValue === 3) {
            this.drawStatusAnimateShape(cfg, group);
        }
        if (cfg.lineDashAnimate) {
            this.drawBorderAnimateShape(cfg, group);
        }
    }
    addShapeApi(cfg, group) {
        const updateShape = (_a) => {
            var { index } = _a, props = __rest(_a, ["index"]);
            const currentShape = group.getChildByIndex(index);
            currentShape.attr(props);
        };
        const updateKeyShape = (props) => {
            updateShape(Object.assign({ index: 0 }, props));
            return group;
        };
        const updateLeftText = (props) => {
            updateShape(Object.assign({ index: 1 }, props));
            return group;
        };
        const updateText = (props) => {
            updateShape(Object.assign({ index: 2 }, props));
            return group;
        };
        const updateRightText = (props) => {
            updateShape(Object.assign({ index: 5 }, props));
            return group;
        };
        const updateIcon = (props) => {
            updateShape(Object.assign({ index: 3 }, props));
        };
        const size = this.size;
        const textWidthToEllipsis = ({ text, threshold = 4, width = size.width, fontSize = 14 }) => {
            return this.textWidthToEllipsis({ text, threshold, width, fontSize });
        };
        group.updateKeyShape = updateKeyShape;
        group.updateLeftText = updateLeftText;
        group.updateText = updateText;
        group.updateRightText = updateRightText;
        group.updateIcon = updateIcon;
        group.textWidthToEllipsis = textWidthToEllipsis;
    }
    drawLeftText(cfg, group) {
        let { leftText, leftTextStyle = {} } = cfg;
        if (!leftText)
            return;
        const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.leftText.origin), { text: leftText }), leftTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-left-text',
            className: 'node-left-text'
        });
    }
    drawRightText(cfg, group) {
        const { rightText, rightTextStyle = {} } = cfg;
        const { width, height } = this.size;
        const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.rightText.origin), { text: rightText ? rightText : '', x: width - 12, y: height - 12 }), rightTextStyle);
        group.addShape('text', {
            attrs,
            name: 'power-right-text',
            className: 'right-text'
        });
    }
    drawTitleText(cfg, group) {
        let { titleText, titleTextStyle = {} } = cfg;
        if (!titleText)
            return;
        const width = this.size.width;
        const height = this.size.height;
        titleText = this.textWidthToEllipsis({ text: titleText, fontSize: 14, width: this.size.width });
        const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.titleText.origin), { text: titleText, x: width / 2, y: height / 2 }), titleTextStyle);
        return group.addShape('text', {
            attrs,
            name: 'power-title-text',
            className: 'node-title-text',
            capture: true,
            draggable: true
        });
    }
    getStatusStyle(cfg) {
        let { taskStatusValue } = cfg;
        const statusArr = [3, 4, 5, 10];
        const style = {
            3: nodeStyle_1.default.statusShape.underway,
            1: nodeStyle_1.default.statusShape.waiting,
            5: nodeStyle_1.default.statusShape.success,
            4: nodeStyle_1.default.statusShape.faild,
            10: nodeStyle_1.default.statusShape.stop
        };
        if (!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0)
            taskStatusValue = 1;
        return style[taskStatusValue];
    }
    drawStatusShape(cfg, group) {
        const width = this.size.width;
        let { taskStatus } = cfg;
        if (!taskStatus)
            return;
        let selfStyle = this.getStatusStyle(cfg);
        this.drawStatusText(cfg, group);
        const attrs = Object.assign(Object.assign({}, selfStyle), { r: nodeStyle_1.default.statusShape.r, x: width - this.getTextWidth2(12, taskStatus) - 10, y: 12 });
        group.addShape('circle', {
            attrs,
            name: 'power-status-text',
            className: 'status-text',
            capture: true,
            draggable: true
        });
    }
    drawStatusText(cfg, group) {
        const width = this.size.width;
        const { taskStatus, taskStatusStyle = {} } = cfg;
        let selfStyle = this.getStatusStyle(cfg);
        const attrs = Object.assign(Object.assign(Object.assign(Object.assign({}, selfStyle), nodeStyle_1.default.statusShape.text), { text: taskStatus, x: width - this.getTextWidth2(12, taskStatus) / 2 - 4, y: 12 }), taskStatusStyle);
        group.addShape('text', {
            attrs,
            name: 'power-status-node',
            className: 'status-node',
            capture: true,
            draggable: true
        });
    }
    drawIcon(icon, group, x = 6) {
        const { height } = this.size;
        group.addShape("image", {
            attrs: {
                img: icon,
                x: x,
                y: height - 20,
                width: 16,
                height: 16,
                shadowColor: '#E6E6E6',
                shadowBlur: 4,
            },
            name: "image-shape"
        });
    }
    drawStatusAnimateShape(cfg, group) {
        const { width } = this.size;
        const x = width - 52;
        const y = 12;
        const r = nodeStyle_1.default.statusShape.r;
        const back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
        const back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
        const back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
        this.createStatusAnimate(r, back1, 0);
        this.createStatusAnimate(r, back2, 1000);
        this.createStatusAnimate(r, back3, 2000);
    }
    drawBorderAnimateShape(cfg, group) {
        const keyShape = group.getChildByIndex(0);
        let index = 0;
        const lineDash = [6, 2, 1, 2];
        keyShape.animate(() => {
            index++;
            if (index > 9) {
                index = 0;
            }
            ;
            return {
                lineDash,
                lineDashOffset: -index
            };
        }, {
            repeat: true,
            duration: 4000,
        });
    }
    createStatusAnimate(r, shape, delay) {
        shape.animate({
            r: r + 5,
            opacity: 0.1
        }, {
            duration: 3000,
            easing: "easeCubic",
            delay,
            repeat: true
        });
    }
    createStatusAnimateShape(cfg, group, name, zIndex, opacity) {
        const { width } = this.size;
        const x = width - this.getTextWidth2(12, cfg.taskStatus) - 10;
        const y = 12;
        return group.addShape("circle", {
            zIndex: zIndex,
            attrs: {
                x,
                y,
                r: nodeStyle_1.default.statusShape.r,
                fill: nodeStyle_1.default.statusShape.underway.fill,
                opacity
            },
            name: name
        });
    }
}
exports.default = FlowNode;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnchorItem_1 = __importDefault(__webpack_require__(10));
const nodeStyle_1 = __importDefault(__webpack_require__(2));
const stateList = {
    'hoverNode': function (item, value) {
        const group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        const group = item.getContainer();
        const current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        const group = item.get('group');
        const nodeModel = item.getModel();
        if (value === 'hide') {
            const startPos = nodeModel.startPos;
            const endPos = nodeModel.endPos;
            const distanceX = Math.abs(endPos.x - startPos.x);
            const distanceY = Math.abs(endPos.Y - startPos.Y);
            let disX = 20 / 1000 * distanceX;
            let disY = 20 / 1000 * distanceY;
            let startX = nodeModel.startPos.x;
            let startY = nodeModel.startPos.x;
            let inc = setInterval(() => {
                if (startX < endPos.x) {
                    clearInterval(inc);
                }
                item.update({
                    x: startX -= disX,
                    y: startY -= disY
                });
            }, 20);
        }
        else {
        }
    }
};
function SimpleNode(Grid) {
    Grid.registerNode('simple-node', {
        draw(cfg, group, inc) {
            this.size = this.computeNodeSize(cfg);
            const keyShape = this.drawKeyShape(cfg, group);
            this.initAnchor(group);
            return keyShape;
        },
        drawKeyShape(cfg, group) {
            let width = this.size.width;
            let height = this.size.height;
            const { style = {} } = cfg;
            const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.base.origin), { fill: '#BB0552', width,
                height }), style);
            const keyShape = group.addShape('rect', {
                attrs: attrs,
                name: 'base-node',
                className: 'base-node'
            });
            return keyShape;
        },
        initAnchor(group) {
            group.anchorShapes = [];
            group.showAnchor = () => {
                this.drawAnchor(group);
            };
            group.clearAnchor = () => {
                this.clearAnchor(group);
            };
        },
        clearAnchor(group) {
            group.anchorShapes && group.anchorShapes.forEach(a => a.remove());
            group.anchorShapes = [];
        },
        drawAnchor(group) {
            const bbox = group.get('children')[0].getBBox();
            this.getAnchorPoints().forEach((point, index) => {
                const anchorContainer = group.addGroup();
                new AnchorItem_1.default({
                    group: anchorContainer,
                    index: index,
                    model: {
                        style: {
                            x: bbox.minX + bbox.width * point[0],
                            y: bbox.minY + bbox.height * point[1]
                        }
                    }
                });
                group.anchorShapes.push(anchorContainer);
            });
        },
        computeNodeSize(cfg) {
            let size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
            let width = size[0] ? size[0] : 180;
            let height = size[1] ? size[1] : 70;
            return { width, height };
        },
        getAnchorPoints() {
            return [
                [0.5, 0],
                [1, 0.5],
                [0.5, 1],
                [0, 0.5],
            ];
        },
        setState(name, value, item) {
            stateList[name] && stateList[name].call(this, item, value);
        }
    });
}
exports.default = SimpleNode;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MaxCircleNode_1 = __importDefault(__webpack_require__(19));
const MaxTrigonNode_1 = __importDefault(__webpack_require__(20));
const MaxDiamondNode_1 = __importDefault(__webpack_require__(21));
const TreeNode_1 = __importDefault(__webpack_require__(22));
exports.default = [MaxCircleNode_1.default, MaxTrigonNode_1.default, MaxDiamondNode_1.default, TreeNode_1.default];


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseNode_1 = __importDefault(__webpack_require__(1));
const nodeStyle_1 = __importDefault(__webpack_require__(2));
class MaxCircleNode extends BaseNode_1.default {
    constructor(Grid) {
        super(Grid, true);
        this.name = 'max-circle-node';
        this.register();
    }
    drawKeyShape(cfg, group) {
        let width = this.size.width;
        let height = this.size.height;
        const { style = {}, r = 20 } = cfg;
        const attrs = Object.assign(Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.default), { fill: '#0577BB', stroke: '#028080' }), style), { x: r, y: r, r: r });
        const keyShape = group.addShape('circle', {
            attrs: attrs,
            name: 'max-circle-node',
            className: 'max-circle-node'
        });
        this.initAnchor(group);
        this.drawIcon(cfg, group);
        this.drawText(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    }
    addShapeApi(cfg, group) {
        const updateKeyShape = (props) => {
            this.updateShape(group, Object.assign({ index: 0 }, props));
            return group;
        };
        const updateIcon = (props) => {
            this.updateShape(group, Object.assign({ index: 1 }, props));
        };
        const updateText = (props) => {
            this.updateShape(group, Object.assign({ index: 2 }, props));
        };
        group.updateKeyShape = updateKeyShape;
        group.updateIcon = updateIcon;
        group.updateText = updateText;
    }
    drawIcon(cfg, group) {
        const { r = 20 } = cfg;
        group.addShape('image', {
            attrs: Object.assign(Object.assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: r - (cfg.iconWidth || 20) / 2, y: r - (cfg.iconHeight || 20) / 2, width: cfg.iconWidth || 20, height: cfg.iconHeight || 20 }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    }
    drawText(cfg, group) {
        const { text, style = {}, r = 20 } = cfg;
        const { textStyle = {} } = style;
        group.addShape('text', {
            attrs: Object.assign({ text: text ? text : '', x: r, y: r * 2 + 8, textAlign: 'center', textBaseline: 'middle', fill: '#666', fontSize: 10 }, textStyle),
        });
    }
}
exports.default = MaxCircleNode;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseNode_1 = __importDefault(__webpack_require__(1));
const nodeStyle_1 = __importDefault(__webpack_require__(2));
class MaxCircleNode extends BaseNode_1.default {
    constructor(Grid, isRegister = true) {
        super(Grid, true);
        this.name = 'max-trigon-node';
        isRegister && this.register();
    }
    drawKeyShape(cfg, group) {
        let width = this.size.width;
        let height = this.size.height;
        const { style = {} } = cfg;
        const { sideLength = 100, position = 'top' } = style;
        const side8 = sideLength * 0.8;
        const side5 = sideLength * 0.5;
        const side1 = sideLength;
        const pointsPos = {
            right: [
                [0, 0],
                [0, side1],
                [side8, side5]
            ],
            bottom: [
                [0, 0],
                [side1, 0],
                [side5, side8]
            ],
            top: [
                [side5, 0],
                [0, side8],
                [side1, side8]
            ],
            left: [
                [0, side5],
                [side8, 0],
                [side8, side1]
            ]
        };
        const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.default), { points: pointsPos[position], fill: '#0577BB', stroke: '#028080' }), style);
        const keyShape = group.addShape('polygon', {
            attrs: attrs,
            name: 'max-trigon-node',
            className: 'max-trigon-node'
        });
        this.initAnchor(group, cfg);
        this.drawIcon(cfg, group);
        return keyShape;
    }
    drawIcon(cfg, group) {
        const { style: { sideLength = 100, position = 'top' } } = cfg;
        const iconWidth = cfg.iconWidth || 20;
        const iconHeight = cfg.iconHeight || 20;
        const inValue = {
            top: {
                x: 0,
                y: 0,
            },
            right: {
                x: -10,
                y: 0
            },
            bottom: {
                x: 0,
                y: -20
            },
            left: {
                x: 0,
                y: 0
            }
        };
        const instance = inValue[position];
        const x = sideLength / 2 - iconWidth / 2 + instance.x;
        const y = sideLength / 2 - iconHeight / 2 + instance.y;
        group.addShape('image', {
            attrs: Object.assign(Object.assign({}, nodeStyle_1.default.default), { img: cfg.icon, x,
                y, width: iconWidth, height: iconHeight }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    }
    getAnchorPoints(cfg) {
        const { style: { sideLength = 100, position = 'top' } } = cfg;
        if (position === 'top' || position === 'bottom') {
            return [
                [0.5, 0],
                [0.75, 0.5],
                [0.5, 1],
                [0.25, 0.5],
            ];
        }
        return [
            [0.5, 0.25],
            [1, 0.5],
            [0.5, 0.75],
            [0, 0.5],
        ];
    }
}
exports.default = MaxCircleNode;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseNode_1 = __importDefault(__webpack_require__(1));
const nodeStyle_1 = __importDefault(__webpack_require__(2));
class MaxDiamondNode extends BaseNode_1.default {
    constructor(Grid, isRegister = true) {
        super(Grid, true);
        this.name = 'max-diamond-node';
        isRegister && this.register();
    }
    drawKeyShape(cfg, group) {
        const { style = {}, sideLength = 50 } = cfg;
        const dot = sideLength / 2;
        const points = [
            [dot, 0],
            [0, dot],
            [dot, sideLength],
            [sideLength, dot]
        ];
        const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.default), { path: [
                ['M', dot, 0],
                ['L', 0, dot],
                ['L', dot, sideLength],
                ['L', sideLength, dot],
                ['Z']
            ], fill: '#0577BB', stroke: '#028080' }), style);
        const keyShape = group.addShape('path', {
            attrs: attrs,
            name: 'max-diamond-node',
            className: 'max-diamond-node'
        });
        this.initAnchor(group, cfg);
        this.drawIcon(cfg, group);
        this.drawText(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    }
    addShapeApi(cfg, group) {
        const updateKeyShape = (props) => {
            this.updateShape(group, Object.assign({ index: 0 }, props));
            return group;
        };
        const updateIcon = (props) => {
            this.updateShape(group, Object.assign({ index: 1 }, props));
        };
        const updateText = (props) => {
            this.updateShape(group, Object.assign({ index: 2 }, props));
        };
        group.updateKeyShape = updateKeyShape;
        group.updateIcon = updateIcon;
        group.updateText = updateText;
    }
    drawIcon(cfg, group) {
        const { style: { position = 'top' }, sideLength = 50 } = cfg;
        const iconWidth = cfg.iconWidth || 20;
        const iconHeight = cfg.iconHeight || 20;
        const x = sideLength / 2 - iconWidth / 2;
        const y = sideLength / 2 - iconHeight / 2;
        group.addShape('image', {
            attrs: Object.assign(Object.assign({}, nodeStyle_1.default.default), { img: cfg.icon, x,
                y, width: iconWidth, height: iconHeight }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    }
    drawText(cfg, group) {
        const { style = {}, sideLength = 50 } = cfg;
        const { textStyle = {} } = style;
        if (cfg.text) {
            group.addShape('text', {
                attrs: Object.assign({ x: sideLength / 2, y: sideLength + 8, textAlign: 'center', textBaseline: 'middle', text: cfg.text, fill: '#666', fontSize: 10 }, textStyle),
                draggable: true,
                name: 'zhao'
            });
        }
    }
}
exports.default = MaxDiamondNode;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseNode_1 = __importDefault(__webpack_require__(1));
const colors = {
    B: '#5B8FF9',
    R: '#F46649',
    Y: '#EEBC20',
    G: '#5BD8A6',
    DI: '#A7A7A7',
};
const stateList = {
    'hoverNode': function (item, value) {
        const group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        const group = item.getContainer();
        const current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        const group = item.get('group');
        const nodeModel = item.getModel();
        if (value === 'hide') {
            const startPos = nodeModel.startPos;
            const endPos = nodeModel.endPos;
            const distanceX = Math.abs(endPos.x - startPos.x);
            const distanceY = Math.abs(endPos.Y - startPos.Y);
            let disX = 20 / 1000 * distanceX;
            let disY = 20 / 1000 * distanceY;
            let startX = nodeModel.startPos.x;
            let startY = nodeModel.startPos.x;
            let inc = setInterval(() => {
                if (startX < endPos.x) {
                    clearInterval(inc);
                }
                item.update({
                    x: startX -= disX,
                    y: startY -= disY
                });
            }, 20);
        }
        else {
        }
    },
    collapse: function (item, value) {
        const group = item.getContainer();
        const collapseText = group.find((e) => e.get('name') === 'collapse-text');
        if (collapseText) {
            if (!value) {
                collapseText.attr({
                    text: '-',
                });
            }
            else {
                collapseText.attr({
                    text: '+',
                });
            }
        }
    }
};
class TreeNode extends BaseNode_1.default {
    constructor(Grid) {
        super(Grid, true);
        this.name = 'tree-node';
        this.extendedName = 'rect';
        this.register();
    }
    draw(cfg, group, inc) {
        const { name = '', variableName, variableValue, variableUp, label, collapsed, currency, status, rate, width = 202, height = 60 } = cfg;
        const grey = '#CED4D9';
        const rectConfig = {
            width: width,
            height: height,
            lineWidth: 1,
            fontSize: 12,
            fill: '#fff',
            radius: 4,
            stroke: grey,
            opacity: 1,
        };
        const nodeOrigin = {
            x: 0,
            y: 0,
        };
        const textConfig = {
            textAlign: 'left',
            textBaseline: 'bottom',
        };
        const rect = group.addShape('rect', {
            attrs: Object.assign({ x: nodeOrigin.x, y: nodeOrigin.y }, rectConfig),
        });
        const rectBBox = rect.getBBox();
        group.addShape('text', {
            attrs: Object.assign({ x: 12 + nodeOrigin.x, y: 20 + nodeOrigin.y, text: name.length > 28 ? name.substr(0, 28) + '...' : name, fontSize: 12, opacity: 0.85, fill: '#000', cursor: 'pointer' }, textConfig),
            name: 'name-shape',
        });
        const price = group.addShape('text', {
            attrs: Object.assign(Object.assign({}, textConfig), { x: 12 + nodeOrigin.x, y: rectBBox.maxY - 12, text: label, fontSize: 16, fill: '#000', opacity: 0.85 }),
        });
        group.addShape('text', {
            attrs: Object.assign(Object.assign({}, textConfig), { x: price.getBBox().maxX + 5, y: rectBBox.maxY - 12, text: currency, fontSize: 12, fill: '#000', opacity: 0.75 }),
        });
        const percentText = group.addShape('text', {
            attrs: Object.assign(Object.assign({}, textConfig), { x: rectBBox.maxX - 8, y: rectBBox.maxY - 12, text: `${((variableValue || 0) * 100).toFixed(2)}%`, fontSize: 12, textAlign: 'right', fill: colors[status] }),
        });
        const symbol = variableUp ? 'triangle' : 'triangle-down';
        const triangle = group.addShape('marker', {
            attrs: Object.assign(Object.assign({}, textConfig), { x: percentText.getBBox().minX - 10, y: rectBBox.maxY - 12 - 6, symbol, r: 6, fill: colors[status] }),
        });
        group.addShape('text', {
            attrs: Object.assign(Object.assign({}, textConfig), { x: triangle.getBBox().minX - 4, y: rectBBox.maxY - 12, text: variableName, fontSize: 12, textAlign: 'right', fill: '#000', opacity: 0.45 }),
        });
        const bottomBackRect = group.addShape('rect', {
            attrs: {
                x: nodeOrigin.x,
                y: rectBBox.maxY - 4,
                width: rectConfig.width,
                height: 4,
                radius: [0, 0, rectConfig.radius, rectConfig.radius],
                fill: '#E0DFE3',
            },
        });
        const bottomRect = group.addShape('rect', {
            attrs: {
                x: nodeOrigin.x,
                y: rectBBox.maxY - 4,
                width: rate * rectBBox.width,
                height: 4,
                radius: [0, 0, 0, rectConfig.radius],
                fill: colors[status],
            },
        });
        if (cfg.children && cfg.children.length) {
            group.addShape('rect', {
                attrs: {
                    x: rectConfig.width + 8,
                    y: rectConfig.height / 2 - 8,
                    width: 16,
                    height: 16,
                    stroke: 'rgba(0, 0, 0, 0.25)',
                    cursor: 'pointer',
                    fill: '#fff',
                },
                name: 'collapse-back',
                modelId: cfg.id,
            });
            group.addShape('text', {
                attrs: {
                    x: rectConfig.width + 16,
                    y: rectConfig.height / 2,
                    textAlign: 'center',
                    textBaseline: 'middle',
                    text: collapsed ? '+' : '-',
                    fontSize: 16,
                    cursor: 'pointer',
                    fill: 'rgba(0, 0, 0, 0.25)',
                },
                name: 'collapse-text',
                modelId: cfg.id,
            });
        }
        this.initAnchor(group);
        return rect;
    }
    getAnchorPoints() {
        return [
            [0, 0.5],
            [1, 0.5],
        ];
    }
    setState(name, value, item) {
        stateList[name] && stateList[name].call(this, item, value);
    }
}
exports.default = TreeNode;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodeStyle_1 = __importDefault(__webpack_require__(2));
function CircleTestNode(Grid) {
    Grid.registerNode('circle-test-node', {
        drawKeyShape(cfg, group) {
            let width = this.size.width;
            let height = this.size.height;
            const { style = {} } = cfg;
            const attrs = Object.assign(Object.assign(Object.assign({}, nodeStyle_1.default.base.origin), { fill: '#BB0552', r: 50 }), style);
            const keyShape = group.addShape('circle', {
                attrs: attrs,
                name: 'circle-test-node-1',
                className: 'circle-test-node'
            });
            return keyShape;
        },
        getAnchorPoints() {
            return [
                [0.5, 0],
                [1, 0.5],
                [0.5, 1],
            ];
        },
    }, 'simple-node');
}
exports.default = CircleTestNode;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const registerEdge_1 = __webpack_require__(25);
const uniqBy = (arr, key) => {
    const result = [];
    arr.forEach(i => {
        if (!result.find(r => r[key] === i[key]))
            result.push(i);
    });
    return result;
};
class CvtePolyline extends registerEdge_1.RegisterEdge {
    constructor(Grid) {
        super(Grid);
        this.name = 'cvte-polyline1';
        this.extendedName = 'polyline';
        this.register();
    }
    draw(cfg, group) {
        this.group = group;
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        const shape = group.addShape('path', {
            className: 'edge-shape',
            attrs: {
                stroke: '#164979',
                lineWidth: 1,
                lineAppendWidth: 8,
                path: this.computePath(cfg),
                endArrow: {
                    path: 'M 0,0 L 6,-2 Q 5 0,6 2 Z',
                    lineDash: [0, 0],
                    fill: '#164979',
                }
            },
            name: 'edge-shape',
        });
        return shape;
    }
    computePath(cfg) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
        const controlPoints = this.getControlPoints(cfg);
        let points = [startPoint];
        if (controlPoints) {
            points = points.concat(controlPoints);
        }
        points.push(endPoint);
        return this.getPath(points);
    }
    getControlPoints(cfg) {
        if (!cfg.sourceNode) {
            return cfg.controlPoints;
        }
        let obj = {
            sNode: cfg.sourceNode,
            tNode: cfg.targetNode,
            sPort: cfg.startPoint,
            tPort: cfg.endPoint,
            offset: 15
        };
        return this.polylineFinding(obj);
    }
    polylineFinding({ sNode, tNode, sPort, tPort, offset }) {
        const sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
        const targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
        const sBBox = this.getExpandedBBox(sourceBBox, offset);
        const tBBox = this.getExpandedBBox(targetBBox, offset);
        const sPoint = this.getExpandedPort(sBBox, sPort);
        const tPoint = this.getExpandedPort(tBBox, tPort);
        let points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
        points = this.filterConnectablePoints(points, sBBox);
        points = this.filterConnectablePoints(points, tBBox);
        const polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
        return polylinePoints;
    }
    getPointBBox(t) {
        return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
    }
    getExpandedBBox(bbox, offset) {
        return 0 === bbox.width && 0 === bbox.height ? bbox : {
            centerX: bbox.centerX,
            centerY: bbox.centerY,
            minX: bbox.minX - offset,
            minY: bbox.minY - offset,
            maxX: bbox.maxX + offset,
            maxY: bbox.maxY + offset,
            height: bbox.height + 2 * offset,
            width: bbox.width + 2 * offset,
        };
    }
    getExpandedPort(bbox, point) {
        return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
            ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
            : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
    }
    getConnectablePoints(sBBox, tBBox, sPoint, tPoint) {
        const lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
        const outerBBox = this.combineBBoxes(sBBox, tBBox);
        const sLineBBox = this.combineBBoxes(sBBox, lineBBox);
        const tLineBBox = this.combineBBoxes(tBBox, lineBBox);
        let points = [];
        points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
        const centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
        [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(bbox => {
            points = points.concat(this.crossPointsByLineAndBBox(bbox, centerPoint));
        });
        points.push({ x: sPoint.x, y: tPoint.y });
        points.push({ x: tPoint.x, y: sPoint.y });
        return points;
    }
    combineBBoxes(sBBox, tBBox) {
        const minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY), maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
        return {
            centerX: (minX + maxX) / 2,
            centerY: (minY + maxY) / 2,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            height: maxY - minY,
            width: maxX - minX,
        };
    }
    vertexOfBBox(bbox) {
        return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
    }
    crossPointsByLineAndBBox(bbox, centerPoint) {
        let crossPoints = [];
        if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
            crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
        if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
            crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
        return crossPoints;
    }
    getBBoxFromVertexes(sPoint, tPoint) {
        const minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x), minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
        return {
            centerX: (minX + maxX) / 2,
            centerY: (minY + maxY) / 2,
            maxX: maxX,
            maxY: maxY,
            minX: minX,
            minY: minY,
            height: maxY - minY,
            width: maxX - minX,
        };
    }
    filterConnectablePoints(points, bbox) {
        return points.filter(point => point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY);
    }
    AStar(points, sPoint, tPoint, sBBox, tBBox) {
        const openList = [sPoint];
        const closeList = [];
        points = uniqBy(this.fillId(points), 'id');
        points.push(tPoint);
        let endPoint;
        while (openList.length > 0) {
            let minCostPoint;
            openList.forEach((p, i) => {
                if (!p.parent)
                    p.f = 0;
                if (!minCostPoint)
                    minCostPoint = p;
                if (p.f < minCostPoint.f)
                    minCostPoint = p;
            });
            if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
                endPoint = minCostPoint;
                break;
            }
            openList.splice(openList.findIndex(o => o.x === minCostPoint.x && o.y === minCostPoint.y), 1);
            closeList.push(minCostPoint);
            const neighbor = points.filter(p => (p.x === minCostPoint.x || p.y === minCostPoint.y)
                && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
                && !this.crossBBox([sBBox, tBBox], minCostPoint, p));
            neighbor.forEach(p => {
                const inOpen = openList.find(o => o.x === p.x && o.y === p.y);
                const currentG = this.getCost(p, minCostPoint);
                if (closeList.find(o => o.x === p.x && o.y === p.y)) {
                }
                else if (inOpen) {
                    if (p.g > currentG) {
                        p.parent = minCostPoint;
                        p.g = currentG;
                        p.f = p.g + p.h;
                    }
                }
                else {
                    p.parent = minCostPoint;
                    p.g = currentG;
                    let h = this.getCost(p, tPoint);
                    if (this.crossBBox([tBBox], p, tPoint)) {
                        h += (tBBox.width / 2 + tBBox.height / 2);
                    }
                    p.h = h;
                    p.f = p.g + p.h;
                    openList.push(p);
                }
            });
        }
        if (endPoint) {
            const result = [];
            result.push({ x: endPoint.x, y: endPoint.y });
            while (endPoint.parent) {
                endPoint = endPoint.parent;
                result.push({ x: endPoint.x, y: endPoint.y });
            }
            return result.reverse();
        }
        return [];
    }
    fillId(points) {
        points.forEach(p => {
            p.id = p.x + '-' + p.y;
        });
        return points;
    }
    crossBBox(bboxes, p1, p2) {
        for (let i = 0; i < bboxes.length; i++) {
            const bbox = bboxes[i];
            if (p1.x === p2.x && bbox.minX < p1.x && bbox.maxX > p1.x) {
                if (p1.y < bbox.maxY && p2.y >= bbox.maxY || p2.y < bbox.maxY && p1.y >= bbox.maxY)
                    return true;
            }
            else if (p1.y === p2.y && bbox.minY < p1.y && bbox.maxY > p1.y) {
                if (p1.x < bbox.maxX && p2.x >= bbox.maxX || p2.x < bbox.maxX && p1.x >= bbox.maxX)
                    return true;
            }
        }
        return false;
    }
    getCost(p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    }
    getPath(points) {
        const path = [];
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            if (i === 0) {
                path.push(['M', point.x, point.y]);
            }
            else if (i === points.length - 1) {
                path.push(['L', point.x, point.y]);
            }
            else {
                const prevPoint = points[i - 1];
                let nextPoint = points[i + 1];
                let cornerLen = 5;
                if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
                    if (prevPoint.x === point.x) {
                        path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                    }
                    else if (prevPoint.y === point.y) {
                        path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                    }
                }
                const yLen = Math.abs(point.y - nextPoint.y);
                const xLen = Math.abs(point.x - nextPoint.x);
                if (yLen > 0 && yLen < cornerLen) {
                    cornerLen = yLen;
                }
                else if (xLen > 0 && xLen < cornerLen) {
                    cornerLen = xLen;
                }
                if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
                    path.push(['Q', point.x, point.y, point.x, point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                }
                else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
                    path.push(['Q', point.x, point.y, point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                }
            }
        }
        return path;
    }
}
exports.default = CvtePolyline;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterEdge = void 0;
const registerManger_1 = __importDefault(__webpack_require__(6));
class RegisterEdge extends registerManger_1.default {
    constructor(G6) {
        super(G6);
        this.name = 'cvte-polyline';
        this.extendedName = 'polyline';
    }
    register() {
        const self = this;
        this.G6.registerEdge(this.name, {
            drawShape: function (cfg, group) {
                return self.draw.call(self, cfg, group, this);
            },
            afterDraw: function (cfg, group) {
                return self.afterDraw.call(self, cfg, group, this);
            },
            update: function (cfg, group) {
                self.update.call(self, cfg, group, this);
            },
            afterUpdate: function (cfg, group) {
                self.afterUpdate.call(self, cfg, group, this);
            },
            setState: function (name, value, item) {
                self.setState.call(self, name, value, item, this);
            }
        }, 'polyline');
    }
    ;
    draw(cfg, group, inc) {
    }
    ;
    update(cfg, group, inc) { }
    ;
    afterUpdate(cfg, group, inc) { }
    ;
    afterDraw(cfg, group, inc) { }
    setState(name, value, item, inc) { }
    ;
}
exports.RegisterEdge = RegisterEdge;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uniqBy = (arr, key) => {
    const result = [];
    arr.forEach(i => {
        if (!result.find(r => r[key] === i[key]))
            result.push(i);
    });
    return result;
};
const stateList = {
    hoverEdge: function (item, value) {
        const group = item.getContainer();
        const current = group.getChildByIndex(0);
        if (value) {
            current.attr("stroke", '#60A1DE');
        }
        else {
            current.attr("stroke", '#164979');
        }
    },
    selectEdge: function (item, value) {
        const group = item.getContainer();
        const current = group.getChildByIndex(0);
        if (value) {
            current.attr({
                "opacity": 1,
                "lineWidth": 2
            });
        }
        else {
            current.attr({
                "opacity": 0.6,
                "lineWidth": 1
            });
        }
    }
};
function default_1(G6) {
    G6.registerEdge('cvte-polyline', {
        drawShape(cfg, group) {
            this.group = group;
            this.label = null;
            const startPoint = cfg.startPoint;
            const endPoint = cfg.endPoint;
            const shape = group.addShape('path', {
                className: 'edge-shape',
                attrs: {
                    stroke: '#164979',
                    lineWidth: 1,
                    lineAppendWidth: 8,
                    path: this.computePath(cfg),
                    opacity: 0.6,
                    endArrow: {
                        path: 'M 0,0 L 6,-2 Q 5 0,6 2 Z',
                        lineDash: [0, 0],
                        fill: '#164979',
                    }
                },
                name: 'edge-shape',
            });
            return shape;
        },
        computePath(cfg) {
            const startPoint = cfg.startPoint;
            const endPoint = cfg.endPoint;
            const controlPoints = this.getControlPoints(cfg);
            let points = [startPoint];
            if (controlPoints) {
                points = points.concat(controlPoints);
            }
            points.push(endPoint);
            return this.getPath(points);
        },
        drawLabel(cfg, group) {
            const labelCfg = cfg.labelCfg || {};
            const labelStyle = this.getLabelStyle(cfg, labelCfg, group);
            const label = group.addShape('text', {
                attrs: Object.assign({}, labelStyle)
            });
            const labelBBox = label.getBBox();
            group.addShape('rect', {
                attrs: {
                    x: labelBBox.x - 4 / 2,
                    y: labelBBox.y - 4 / 2,
                    width: labelBBox.width + 4,
                    height: labelBBox.height + 4,
                    fill: '#fff',
                    stroke: '#fff',
                },
                name: 'edge-labelRect',
                className: 'edge-labelRect',
            });
            group.toBack();
            label.toFront();
            return label;
        },
        afterUpdate(cfg, item) {
            const label = item.getContainer().findByClassName('edge-label');
            const labelRect = item.getContainer().findByClassName('edge-labelRect');
            if (label) {
                const labelBBox = label.getBBox();
                labelRect.attr({
                    x: labelBBox.x - 4 / 2,
                    y: labelBBox.y - 4 / 2,
                    width: labelBBox.width + 4,
                    height: labelBBox.height + 4,
                });
            }
        },
        getControlPoints(cfg) {
            if (!cfg.sourceNode) {
                return cfg.controlPoints;
            }
            let obj = {
                sNode: cfg.sourceNode,
                tNode: cfg.targetNode,
                sPort: cfg.startPoint,
                tPort: cfg.endPoint,
                offset: 15
            };
            return this.polylineFinding(obj);
        },
        polylineFinding({ sNode, tNode, sPort, tPort, offset }) {
            const sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
            const targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
            const sBBox = this.getExpandedBBox(sourceBBox, offset);
            const tBBox = this.getExpandedBBox(targetBBox, offset);
            const sPoint = this.getExpandedPort(sBBox, sPort);
            const tPoint = this.getExpandedPort(tBBox, tPort);
            let points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
            points = this.filterConnectablePoints(points, sBBox);
            points = this.filterConnectablePoints(points, tBBox);
            const polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
            return polylinePoints;
        },
        getPointBBox(t) {
            return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
        },
        getExpandedBBox(bbox, offset) {
            return 0 === bbox.width && 0 === bbox.height ? bbox : {
                centerX: bbox.centerX,
                centerY: bbox.centerY,
                minX: bbox.minX - offset,
                minY: bbox.minY - offset,
                maxX: bbox.maxX + offset,
                maxY: bbox.maxY + offset,
                height: bbox.height + 2 * offset,
                width: bbox.width + 2 * offset,
            };
        },
        getExpandedPort(bbox, point) {
            return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
                ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
                : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
        },
        getConnectablePoints(sBBox, tBBox, sPoint, tPoint) {
            const lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
            const outerBBox = this.combineBBoxes(sBBox, tBBox);
            const sLineBBox = this.combineBBoxes(sBBox, lineBBox);
            const tLineBBox = this.combineBBoxes(tBBox, lineBBox);
            let points = [];
            points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
            const centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
            [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(bbox => {
                points = points.concat(this.crossPointsByLineAndBBox(bbox, centerPoint));
            });
            points.push({ x: sPoint.x, y: tPoint.y });
            points.push({ x: tPoint.x, y: sPoint.y });
            return points;
        },
        combineBBoxes(sBBox, tBBox) {
            const minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY), maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
            return {
                centerX: (minX + maxX) / 2,
                centerY: (minY + maxY) / 2,
                minX: minX,
                minY: minY,
                maxX: maxX,
                maxY: maxY,
                height: maxY - minY,
                width: maxX - minX,
            };
        },
        vertexOfBBox(bbox) {
            return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
        },
        crossPointsByLineAndBBox(bbox, centerPoint) {
            let crossPoints = [];
            if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
                crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
            if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
                crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
            return crossPoints;
        },
        getBBoxFromVertexes(sPoint, tPoint) {
            const minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x), minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
            return {
                centerX: (minX + maxX) / 2,
                centerY: (minY + maxY) / 2,
                maxX: maxX,
                maxY: maxY,
                minX: minX,
                minY: minY,
                height: maxY - minY,
                width: maxX - minX,
            };
        },
        filterConnectablePoints(points, bbox) {
            return points.filter(point => point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY);
        },
        AStar(points, sPoint, tPoint, sBBox, tBBox) {
            const openList = [sPoint];
            const closeList = [];
            points = uniqBy(this.fillId(points), 'id');
            points.push(tPoint);
            let endPoint;
            while (openList.length > 0) {
                let minCostPoint;
                openList.forEach((p, i) => {
                    if (!p.parent)
                        p.f = 0;
                    if (!minCostPoint)
                        minCostPoint = p;
                    if (p.f < minCostPoint.f)
                        minCostPoint = p;
                });
                if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
                    endPoint = minCostPoint;
                    break;
                }
                const index = openList.findIndex(o => o.x === minCostPoint.x && o.y === minCostPoint.y);
                openList.splice(index === -1 ? 0 : index, 1);
                closeList.push(minCostPoint);
                const neighbor = points.filter(p => (p.x === minCostPoint.x || p.y === minCostPoint.y)
                    && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
                    && !this.crossBBox([sBBox, tBBox], minCostPoint, p));
                neighbor.forEach(p => {
                    const inOpen = openList.find(o => o.x === p.x && o.y === p.y);
                    const currentG = this.getCost(p, minCostPoint);
                    if (closeList.find(o => o.x === p.x && o.y === p.y)) {
                    }
                    else if (inOpen) {
                        if (p.g > currentG) {
                            p.parent = minCostPoint;
                            p.g = currentG;
                            p.f = p.g + p.h;
                        }
                    }
                    else {
                        p.parent = minCostPoint;
                        p.g = currentG;
                        let h = this.getCost(p, tPoint);
                        if (this.crossBBox([tBBox], p, tPoint)) {
                            h += (tBBox.width / 2 + tBBox.height / 2);
                        }
                        p.h = h;
                        p.f = p.g + p.h;
                        openList.push(p);
                    }
                });
            }
            if (endPoint) {
                const result = [];
                result.push({ x: endPoint.x, y: endPoint.y });
                while (endPoint.parent) {
                    endPoint = endPoint.parent;
                    result.push({ x: endPoint.x, y: endPoint.y });
                }
                return result.reverse();
            }
            return [];
        },
        fillId(points) {
            points.forEach(p => {
                p.id = p.x + '-' + p.y;
            });
            return points;
        },
        crossBBox(bboxes, p1, p2) {
            for (let i = 0; i < bboxes.length; i++) {
                const bbox = bboxes[i];
                if (p1.x === p2.x && bbox.minX < p1.x && bbox.maxX > p1.x) {
                    if (p1.y < bbox.maxY && p2.y >= bbox.maxY || p2.y < bbox.maxY && p1.y >= bbox.maxY)
                        return true;
                }
                else if (p1.y === p2.y && bbox.minY < p1.y && bbox.maxY > p1.y) {
                    if (p1.x < bbox.maxX && p2.x >= bbox.maxX || p2.x < bbox.maxX && p1.x >= bbox.maxX)
                        return true;
                }
            }
            return false;
        },
        getCost(p1, p2) {
            return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
        },
        getPath(points) {
            const path = [];
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                if (i === 0) {
                    path.push(['M', point.x, point.y]);
                }
                else if (i === points.length - 1) {
                    path.push(['L', point.x, point.y]);
                }
                else {
                    const prevPoint = points[i - 1];
                    let nextPoint = points[i + 1];
                    let cornerLen = 5;
                    if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
                        if (prevPoint.x === point.x) {
                            path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                        }
                        else if (prevPoint.y === point.y) {
                            path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                        }
                    }
                    const yLen = Math.abs(point.y - nextPoint.y);
                    const xLen = Math.abs(point.x - nextPoint.x);
                    if (yLen > 0 && yLen < cornerLen) {
                        cornerLen = yLen;
                    }
                    else if (xLen > 0 && xLen < cornerLen) {
                        cornerLen = xLen;
                    }
                    if (prevPoint.x !== nextPoint.x && nextPoint.x === point.x) {
                        path.push(['Q', point.x, point.y, point.x, point.y > nextPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                    }
                    else if (prevPoint.y !== nextPoint.y && nextPoint.y === point.y) {
                        path.push(['Q', point.x, point.y, point.x > nextPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                    }
                }
            }
            return path;
        },
        setState(name, value, item) {
            stateList[name] && stateList[name].call(this, item, value);
        }
    }, 'polyline');
}
exports.default = default_1;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(G6) {
    G6.registerEdge('cover-cricle', {
        draw(cfg, group) {
            let startPoint = cfg.startPoint;
            let endPoint = cfg.endPoint;
            let centerPoint = {
                x: (startPoint.x + endPoint.x) / 2,
                y: (startPoint.y + endPoint.y) / 2
            };
            let controlPoint = {
                x: (startPoint.x + centerPoint.x) / 2,
                y: startPoint.y
            };
            let path = group.addShape("path", {
                attrs: {
                    path: [["M", startPoint.x, startPoint.y], ["Q", controlPoint.x + 8, controlPoint.y, centerPoint.x, centerPoint.y], ["T", endPoint.x - 8, endPoint.y], ["L", endPoint.x, endPoint.y]],
                    stroke: "#ccc",
                    lineWidth: 1.6,
                    endArrow: {
                        path: "M 12,4 L 4,0 L 12,-4 Z",
                        d: 4,
                        fill: '#fff',
                    }
                }
            });
            return path;
        },
    });
}
exports.default = default_1;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shapeBase_1 = __webpack_require__(29);
const shape_1 = __importDefault(__webpack_require__(30));
const registerManger_1 = __importDefault(__webpack_require__(6));
class BaseAnchor extends registerManger_1.default {
    constructor(Grid) {
        super(Grid);
        this.register();
    }
    register() {
        shape_1.default.registerFactory('anchor', {
            defaultShapeType: 'marker',
            getShape: (type) => {
                const shapeObj = Object.assign({}, shapeBase_1.shapeBase, {
                    type: 'marker',
                    itemType: type,
                    drawShape(cfg, group) {
                        const style = this.getShapeStyle(cfg);
                        const shape = group.addShape('marker', {
                            attrs: style,
                            name: 'anchor-shape',
                            draggable: true,
                        });
                        return shape;
                    },
                    setState(name, value, item) {
                        if (name === 'anchor-active') {
                            if (value) {
                                this.update({ style: { fill: '#1990FF', r: 5 } }, item);
                            }
                        }
                        if (name === 'hoverAnchor') {
                            if (value) {
                                this.update({ style: { fill: '#AEA1FF' } }, item);
                            }
                            else {
                                this.update({ style: { fill: '#FFF' } }, item);
                            }
                        }
                    }
                });
                return shapeObj;
            },
        });
    }
}
exports.default = BaseAnchor;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-core/lib/element/shapeBase");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-core/lib/element/shape");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hover_1 = __importDefault(__webpack_require__(32));
const hover_2 = __importDefault(__webpack_require__(33));
const drag_1 = __importDefault(__webpack_require__(34));
const drag_2 = __importDefault(__webpack_require__(35));
const select_1 = __importDefault(__webpack_require__(36));
const hover_3 = __importDefault(__webpack_require__(37));
const delete_1 = __importDefault(__webpack_require__(38));
const addNode_1 = __importDefault(__webpack_require__(39));
const align_1 = __importDefault(__webpack_require__(40));
exports.default = [hover_1.default, hover_2.default, drag_1.default, drag_2.default, select_1.default, hover_3.default, delete_1.default, addNode_1.default, align_1.default];


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onNodeMouseEnter(e) {
        this.graph.setItemState(e.item, 'hoverNode', true);
    },
    onNodeMouseLeave(e) {
        if (e.target.cfg.name === 'anchor-shape')
            return;
        this.graph.setItemState(e.item, 'hoverNode', false);
    }
};
class HoverNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-hover-node';
        this.register(Event);
    }
    getEvents() {
        return {
            'node:mouseenter': 'onNodeMouseEnter',
            'node:mouseleave': 'onNodeMouseLeave'
        };
    }
}
exports.default = HoverNode;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onNodeMouseEnter(e) {
        this.graph.setItemState(e.item, 'hoverNode', true);
    },
    onAnchorMouseLeave(e) {
        const node = e.item.getContainer().getParent();
        this.graph.setItemState(e.item, 'hoverAnchor', false);
        node && this.graph.setItemState(node.get('item'), 'hoverNode', false);
    },
    onAnchorMouseEnter(e) {
        this.graph.setItemState(e.item, 'hoverAnchor', true);
    }
};
class HoverAnchor extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-hover-anchor';
        this.register(Event);
    }
    getEvents() {
        return {
            'anchor:mouseleave': 'onAnchorMouseLeave',
            'anchor:mouseenter': 'onAnchorMouseEnter'
        };
    }
}
exports.default = HoverAnchor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    origin: null,
    target: null,
    onNodeDragStart(e) {
        this.target = e.item;
        this.origin = {
            x: e.x,
            y: e.y
        };
    },
    onNodeDrag(e) {
        if (!this.origin)
            return;
        const model = this.target.get('model');
        const origin = this.origin;
        if (!this.point) {
            this.point = {
                x: model.x,
                y: model.y
            };
        }
        const x = e.x - origin.x + this.point.x;
        const y = e.y - origin.y + this.point.y;
        this.origin = { x: e.x, y: e.y };
        this.point = { x, y };
        this.moveDelegate(this.target, x, y);
    },
    onNodeDragEnd(e) {
        if (!this.origin) {
            return;
        }
        const delegateShape = e.item.get('delegateShape');
        const bbox = delegateShape.getBBox();
        const x = bbox.x + 3;
        const y = bbox.y + 3;
        delegateShape.remove();
        this.target.set('delegateShape', null);
        this.graph.updateItem(this.target, { x, y });
        const MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
        this.point = null;
        this.origin = null;
        this.graph.emit('afternodedragend');
    },
    moveDelegate(item, x, y) {
        let shape = item.get('delegateShape');
        const bbox = item.get('keyShape').getBBox();
        const keyShape = item.getKeyShape();
        const keyShapeAttr = keyShape.attr();
        if (!shape) {
            const parent = this.graph.get('group');
            const attrs = {
                stroke: keyShapeAttr.stroke ? keyShapeAttr.stroke : '#1890FF',
                fill: keyShapeAttr.fill ? keyShapeAttr.fill : '#1890FF',
                fillOpacity: .08,
                lineDash: [4, 4],
                radius: 4,
                lineWidth: 1,
            };
            let other = {};
            if (keyShapeAttr.r) {
                other.radius = bbox.width / 2;
            }
            shape = parent.addShape('rect', {
                attrs: Object.assign(Object.assign({ width: bbox.width, height: bbox.height, x: x - bbox.width / 2, y: y - bbox.height / 2, nodeId: item.get('id') }, attrs), other)
            });
            item.set('delegateShape', shape);
        }
        shape.attr({ x: x, y: y });
        this.graph.paint();
        this.graph.emit('afternodedrag', shape);
    }
};
class DragNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-drag-node';
        this.register(Event);
    }
    getEvents() {
        return {
            "node:dragstart": "onNodeDragStart",
            'node:drag': 'onNodeDrag',
            "node:dragend": 'onNodeDragEnd'
        };
    }
}
exports.default = DragNode;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    originInfo: null,
    target: null,
    isSameNode(e) {
        return e.target.getParent() && e.target.getParent().getParent() && e.target.getParent().getParent().get('item') === this.originInfo.sourceNode;
    },
    onDragLeave(e) {
        if (!this.originInfo)
            return;
        e.item.setHotspotActived(false);
        this.originInfo.targetNode = null;
        this.originInfo.targetAnchor = null;
    },
    onDragEnter(e) {
        if (!this.originInfo)
            return;
        e.item.setHotspotActived(true);
        if (!this.isSameNode(e)) {
            this.originInfo.targetNode = e.target.getParent().getParent().get('item');
            this.originInfo.targetAnchor = e.item.get('index');
        }
    },
    onDrag(e) {
        this._updateEdgeDelegate(this.target, e.x, e.y);
    },
    _updateEdgeDelegate(item, x, y) {
        let edgeShape = item.get('edgeDelegate');
        const self = this;
        if (!edgeShape) {
            const parent = self.graph.get('group');
            edgeShape = parent.addShape('line', {
                attrs: {
                    x1: this.originInfo.x,
                    y1: this.originInfo.y,
                    x2: x,
                    y2: y,
                    stroke: '#1890FF',
                    lineDash: [4, 4],
                    lineWidth: 1
                }
            });
            edgeShape.set('capture', false);
            item.set('edgeDelegate', edgeShape);
        }
        edgeShape.attr({ x2: x, y2: y });
        this.graph.paint();
    },
    onDragStart(e) {
        const anchorIndex = e.item.get("index");
        const sourceNode = e.target.getParent().getParent().get("item");
        const model = sourceNode.get('model');
        const point = sourceNode.getAnchorPoints(model)[anchorIndex];
        this.originInfo = {
            x: point.x,
            y: point.y,
            sourceNode: sourceNode,
            sourceAnchor: anchorIndex
        };
        this.showAllAnchor();
        this.graph.set('edgeDragging', true);
        this.target = e.item;
    },
    onDragEnd(e) {
        this.clearAllAnchor();
        const delegateShape = e.item.get('edgeDelegate');
        if (delegateShape) {
            delegateShape.remove();
        }
        const edgeEndCallback = this.graph.get('edgeEndCallback');
        let isAddEdge = edgeEndCallback(this.originInfo.sourceNode, this.originInfo.targetNode);
        if (!isAddEdge)
            return;
        if (this.originInfo.targetNode) {
            this.graph.add('edge', {
                source: this.originInfo.sourceNode.get('id'),
                target: this.originInfo.targetNode.get('id'),
                sourceAnchor: this.originInfo.sourceAnchor,
                targetAnchor: this.originInfo.targetAnchor,
                type: 'cvte-polyline'
            });
        }
        this.graph.setItemState(this.originInfo.sourceNode, 'hoverNode', false);
        this.graph.emit('onDargEdgeEnd', {
            sourceNode: this.originInfo.sourceNode,
            targetNode: this.originInfo.targetNode
        });
        const MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
    },
    clearAllAnchor() {
        const allNode = this.graph.getNodes();
        allNode.forEach(node => {
            const group = node.getContainer();
            group.clearAnchor();
        });
        this.graph.setItemState(this.originInfo.sourceNode, 'hover', false);
    },
    showAllAnchor(func) {
        const allNode = this.graph.getNodes();
        const sourceGroupId = this.originInfo.sourceNode.getModel().groupId;
        allNode.forEach(node => {
            const group = node.getContainer();
            if (this.originInfo.sourceNode === node) {
                group.anchorShapes.forEach(a => {
                    a.get('item').showHotpot();
                    const index = a.get('item').get('index');
                    if (index === this.originInfo.sourceAnchor)
                        this.graph.setItemState(a.get('item'), 'anchor-active', true);
                });
                return;
            }
            group.showAnchor();
            group.anchorShapes.forEach(a => a.get('item').showHotpot());
        });
    }
};
class HoverAnchor extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-drag-anchor';
        this.register(Event);
    }
    getEvents() {
        return {
            "anchor:dragstart": "onDragStart",
            "anchor:dragend": "onDragEnd",
            "anchor:dragenter": "onDragEnter",
            "anchor:dragleave": "onDragLeave",
            "anchor:drag": "onDrag"
        };
    }
}
exports.default = HoverAnchor;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onNodeClick(e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectNode', true);
        this.graph.set('selectedItem', e.item);
        const group = e.item.get('group');
        this.graph.emit('onSelectNode', e.item, group);
        this.graph.set('noKeyDown', false);
    },
    onEdgeClick(e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectEdge', true);
        this.graph.set('selectedItem', e.item);
        this.graph.set('noKeyDown', false);
        const group = e.item.get('group');
        this.graph.emit('onSelectedEdge', e.item, group);
    },
    onCanvasClick(e) {
        this.graph.set('noKeyDown', false);
        this.clearAllSelected();
    },
    clearAllSelected() {
        let selectedNode = this.graph.findAllByState('node', 'selectNode');
        this.graph.set('selectedItem', null);
        let selectedEdge = this.graph.findAllByState('edge', 'selectEdge');
        selectedNode.forEach(node => {
            this.graph.setItemState(node, 'selectNode', false);
        });
        selectedEdge.forEach(node => {
            this.graph.setItemState(node, 'selectEdge', false);
        });
        this.graph.emit('onClearSelectNode', null);
    },
    onNodeDoubleClick(e) {
        this.graph.setItemState(e.item, 'selectNode', true);
        this.graph.set('selectedItem', e.item);
        this.graph.emit('onDoubleClickNode', e.item);
        this.graph.set('noKeyDown', false);
    },
    onEdgeDoubleClick(e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectEdge', true);
        this.graph.set('selectedItem', e.item);
        this.graph.set('noKeyDown', false);
        const group = e.item.get('group');
        this.graph.emit('onDoubleClickEdge', e.item, group);
    }
};
class SelectNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-select-node';
        this.register(Event);
    }
    getEvents() {
        return {
            'node:click': 'onNodeClick',
            'canvas:click': 'onCanvasClick',
            'edge:click': 'onEdgeClick',
            'node:dblclick': 'onNodeDoubleClick',
            'edge:dblclick': 'onEdgeDoubleClick'
        };
    }
}
exports.default = SelectNode;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onEdgeMouseEnter(e) {
        this.graph.setItemState(e.item, 'hoverEdge', true);
    },
    onEdgeMouseLeave(e) {
        this.graph.setItemState(e.item, 'hoverEdge', false);
    }
};
class HoverNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-hover-edge';
        this.register(Event);
    }
    getEvents() {
        return {
            'edge:mouseenter': 'onEdgeMouseEnter',
            'edge:mouseleave': 'onEdgeMouseLeave'
        };
    }
}
exports.default = HoverNode;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onKeyDown(e) {
        const item = this.graph.get('selectedItem');
        if (this.graph.get('noKeyDown')) {
            return;
        }
        if (e.keyCode === 8 && item) {
            const MacroCommand = this.graph.get('MacroCommand');
            if (MacroCommand) {
                MacroCommand.executeCommand('delete', { graph: this.graph });
            }
            else {
                this.graph.remove(item);
                this.graph.set('selectedItem', null);
            }
        }
    }
};
class HoverNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-delete-item';
        this.register(Event);
    }
    getEvents() {
        return {
            'keydown': 'onKeyDown'
        };
    }
}
exports.default = HoverNode;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onMouseUp(e) {
        const addNodeDragging = this.graph.get('addNodeDragging');
        if (!addNodeDragging)
            return;
        const addNodeModel = this.graph.get('addNodeModel');
        const viewPoint = this.graph.getPointByClient(e.clientX, e.clientY);
        const x = viewPoint.x - addNodeModel.offsetX;
        const y = viewPoint.y - addNodeModel.offsetY;
        const nodeId = new Date().getTime();
        const model = Object.assign({ type: addNodeModel.nodeType, id: `${nodeId}`, x,
            y, style: Object.assign({}, addNodeModel) }, addNodeModel.model);
        this.graph.addItem('node', model);
        this.graph.paint();
        this.graph.emit('onAddPanelNode', model);
        const MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
    }
};
class CoverAddNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-add-node';
        this.register(Event);
    }
    getEvents() {
        return {
            'canvas:mouseup': 'onMouseUp',
        };
    }
}
exports.default = CoverAddNode;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(3);
const matrix_util_1 = __webpack_require__(41);
const registerBehavior_1 = __importDefault(__webpack_require__(0));
const Event = {
    onDrag(shape) {
        this._clearAlignLine();
        this._itemAlign(shape);
    },
    onDragEnd() {
        this._clearAlignLine();
    },
    getDefaultCfg() {
        return {
            alignLineStyle: { stroke: '#540000', lineWidth: 1 },
            tolerance: 4,
            _alignLines: [],
        };
    },
    _itemAlign(item) {
        const bbox = item.getBBox();
        const ct = { x: bbox.x + bbox.width / 2, y: bbox.y };
        const cc = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
        const cb = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height };
        const lc = { x: bbox.x, y: bbox.y + bbox.height / 2 };
        const rc = { x: bbox.x + bbox.width, y: bbox.y + bbox.height / 2 };
        const nodes = item._attrs && item._attrs.nodeId ? this.graph.getNodes().filter(n => n.get('id') !== item._attrs.nodeId) : this.graph.getNodes();
        util_1.each(nodes, (node) => {
            const horizontalLines = [];
            const verticalLines = [];
            let p = null;
            const bbox1 = node.getBBox();
            util_1.each(this.getHorizontalLines(bbox1), (line) => {
                horizontalLines.push(this.getDistance(line, ct));
                horizontalLines.push(this.getDistance(line, cc));
                horizontalLines.push(this.getDistance(line, cb));
            });
            util_1.each(this.getVerticalLines(bbox1), (line) => {
                verticalLines.push(this.getDistance(line, lc));
                verticalLines.push(this.getDistance(line, cc));
                verticalLines.push(this.getDistance(line, rc));
            });
            horizontalLines.sort((a, b) => a.dis - b.dis);
            verticalLines.sort((a, b) => a.dis - b.dis);
            if (horizontalLines.length > 0 && horizontalLines[0].dis < this.tolerance) {
                item.attr({ y: horizontalLines[0].line[1] - horizontalLines[0].point.y + bbox.y });
                p = { horizontals: [horizontalLines[0]] };
                for (let i = 1; i < 3; i++)
                    horizontalLines[0].dis === horizontalLines[i].dis && p.horizontals.push(horizontalLines[i]);
            }
            if (verticalLines.length > 0 && verticalLines[0].dis < this.tolerance) {
                item.attr({ x: verticalLines[0].line[0] - verticalLines[0].point.x + bbox.x });
                p ? p.verticals = [verticalLines[0]] : p = { verticals: [verticalLines[0]] };
                for (let i = 1; i < 3; i++)
                    verticalLines[0].dis === verticalLines[i].dis && p.verticals.push(verticalLines[i]);
            }
            if (p) {
                p.bbox = bbox;
                this._addAlignLine(p);
            }
        });
    },
    _addAlignLine(p) {
        const group = this.graph.get('group');
        const bbox = p.bbox;
        const lineStyle = this.alignLineStyle;
        const lineArr = this._alignLines;
        if (p.horizontals) {
            util_1.each(p.horizontals, function (lineObj) {
                const line = lineObj.line;
                const point = lineObj.point;
                const lineHalf = (line[0] + line[2]) / 2;
                let x1, x2;
                if (point.x < lineHalf) {
                    x1 = point.x - bbox.width / 2;
                    x2 = Math.max(line[0], line[2]);
                }
                else {
                    x1 = point.x + bbox.width / 2;
                    x2 = Math.min(line[0], line[2]);
                }
                const shape = group.addShape('line', { attrs: util_1.mix({ x1, y1: line[1], x2, y2: line[1] }, lineStyle), capture: false });
                lineArr.push(shape);
            });
        }
        if (p.verticals) {
            util_1.each(p.verticals, function (lineObj) {
                const line = lineObj.line;
                const point = lineObj.point;
                const lineHalf = (line[1] + line[3]) / 2;
                let y1, y2;
                if (point.y < lineHalf) {
                    y1 = point.y - bbox.height / 2;
                    y2 = Math.max(line[1], line[3]);
                }
                else {
                    y1 = point.y + bbox.height / 2;
                    y2 = Math.min(line[1], line[3]);
                }
                const shape = group.addShape('line', { attrs: util_1.mix({ x1: line[0], y1, x2: line[0], y2 }, lineStyle), capture: false });
                lineArr.push(shape);
            });
        }
    },
    getHorizontalLines(bbox) {
        return [
            [bbox.minX, bbox.minY, bbox.maxX, bbox.minY],
            [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY],
            [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY],
        ];
    },
    getVerticalLines(bbox) {
        return [
            [bbox.minX, bbox.minY, bbox.minX, bbox.maxY],
            [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY],
            [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY],
        ];
    },
    getDistance(line, point) {
        return { line, point, dis: this.pointLineDistance(line[0], line[1], line[2], line[3], point.x, point.y) };
    },
    pointLineDistance: function (lineX1, lineY1, lineX2, lineY2, pointX, pointY) {
        const lineLength = [lineX2 - lineX1, lineY2 - lineY1];
        if (matrix_util_1.vec2.exactEquals(lineLength, [0, 0]))
            return NaN;
        let s = [-lineLength[1], lineLength[0]];
        matrix_util_1.vec2.normalize(s, s);
        return Math.abs(matrix_util_1.vec2.dot([pointX - lineX1, pointY - lineY1], s));
    },
    _clearAlignLine() {
        util_1.each(this._alignLines, (line) => {
            line.remove();
        });
        this._alignLines = [];
        this.graph.paint();
    },
};
class AlignNode extends registerBehavior_1.default {
    constructor(Grid) {
        super(Grid);
        this.name = 'cover-align-node';
        this.register(Event);
    }
    getEvents() {
        return {
            'afternodedrag': 'onDrag',
            'afternodedragend': 'onDragEnd'
        };
    }
}
exports.default = AlignNode;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@antv/matrix-util");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutSetting = void 0;
const layoutDefault = {
    type: 'dagre',
    align: 'DL',
    nodesep: 20,
    ranksep: 50,
    controlPoints: true,
};
exports.layoutSetting = {
    horizontal: Object.assign(Object.assign({}, layoutDefault), { rankdir: 'LR' }),
    vertical: Object.assign(Object.assign({}, layoutDefault), { rankdir: 'TB' })
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowUtil = void 0;
class FlowUtil {
    constructor() {
        this.debounce = (func, timer) => {
            let timeout = null;
            return () => {
                if (!timeout) {
                    timeout = setTimeout(func, timer);
                    return;
                }
                ;
                clearTimeout(timeout);
                timeout = setTimeout(func, timer);
            };
        };
        this.throttle = () => { };
    }
}
exports.FlowUtil = FlowUtil;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(4));
const Workflow_1 = __importDefault(__webpack_require__(9));
const Header_1 = __importDefault(__webpack_require__(45));
const NodePanelGroup_1 = __importDefault(__webpack_require__(48));
const AddNodePanel_1 = __importDefault(__webpack_require__(52));
const CommandPlugin_1 = __importDefault(__webpack_require__(53));
const ToolBarPlugin_1 = __importDefault(__webpack_require__(54));
const command_1 = __importDefault(__webpack_require__(55));
__webpack_require__(67);
const baseSize = {
    listWidth: 200,
    toolHeight: 48
};
class FlowUtil {
    constructor() {
        this.autoSize = (innerHeight = window.innerHeight, innerWidth = window.innerWidth) => {
            return {
                listWidth: baseSize.listWidth,
                listHeight: innerHeight - baseSize.toolHeight,
                flowWidth: innerWidth - baseSize.listWidth,
                flowHeight: innerHeight - baseSize.toolHeight
            };
        };
        this.debounce = (func, timer) => {
            let timeout = null;
            return () => {
                if (!timeout) {
                    timeout = setTimeout(func, timer);
                    return;
                }
                ;
                clearTimeout(timeout);
                timeout = setTimeout(func, timer);
            };
        };
        this.throttle = () => { };
    }
}
class Flow extends react_1.Component {
    constructor() {
        super(...arguments);
        this.toolBar = react_1.default.createRef();
        this.xiooFlow = react_1.default.createRef();
        this.util = new FlowUtil();
        this.workflowContainer = react_1.default.createRef();
        this.nodePanelContainer = react_1.default.createRef();
        this.workflowInstance = null;
        this.state = {
            size: {
                listWidth: 0,
                listHeight: 0,
                flowWidth: 0,
                flowHeight: 0
            }
        };
        this.initWorkflow = () => {
            const { size } = this.state;
            const { initEdges, initNodes, layout, returnGraph, animate, commandList, judgeEdgeEnd, registerNodeList = [], registerEdgeList = [], registerNodes = [], registerBehaviors = [], treeGroup, defaultEdge, defaultNode, modes, mode = 'edit' } = this.props;
            const Command = new CommandPlugin_1.default();
            const plugins = [Command];
            if (this.nodePanelContainer.current) {
                const NodePanel = new AddNodePanel_1.default({ container: this.nodePanelContainer.current });
                plugins.push(NodePanel);
            }
            if (this.toolBar.current) {
                const ToolBar = new ToolBarPlugin_1.default({ container: this.toolBar.current });
                plugins.push(ToolBar);
            }
            const workflowInstance = new Workflow_1.default({
                container: this.workflowContainer.current,
                width: size.flowWidth,
                height: size.flowHeight,
                plugins: plugins,
                layout: layout,
                initNodes,
                initEdges,
                registerNodes,
                animate,
                registerEdgeList,
                registerBehaviors,
                edgeCallback: judgeEdgeEnd,
                treeGroup,
                defaultEdge,
                defaultNode,
                modes
            });
            workflowInstance.graph.setMode(mode);
            workflowInstance.graph.on('onDoubleClickNode', (e) => {
            });
            workflowInstance.graph.on('onDargEdgeEnd', (e) => {
                console.log(e);
            });
            this.workflowInstance = workflowInstance;
            this.registerListener();
            returnGraph && returnGraph(this.workflowInstance);
            command_1.default(commandList);
        };
        this.registerListener = () => {
            const { listeners } = this.props;
            Object.keys(listeners).forEach(key => {
                this.workflowInstance.graph.on(key, listeners[key]);
            });
        };
        this.handleHeaderChange = (key) => {
        };
    }
    componentDidMount() {
        const observer = new ResizeObserver((entity) => {
            const { contentRect: { height, width } } = entity[0];
            console.log(entity);
            this.autoSize(height, width);
        });
        observer.observe(this.xiooFlow.current);
    }
    autoSize(height, width) {
        const size = this.util.autoSize(height, width);
        this.setState({ size }, () => {
            if (!this.workflowInstance) {
                this.initWorkflow();
            }
        });
        if (this.workflowInstance) {
            this.workflowInstance.graph.changeSize(size.flowWidth, size.flowHeight);
        }
    }
    render() {
        const { mode = 'edit' } = this.props;
        return (react_1.default.createElement("div", { className: "xioo-flow", id: "xioo-flow", ref: this.xiooFlow },
            this.props.ExtraElement,
            mode === 'edit' && (react_1.default.createElement("div", { className: "xioo-flow-header", ref: this.toolBar },
                react_1.default.createElement(Header_1.default, { xiooFlow: this.xiooFlow }, this.props.toolbar))),
            react_1.default.createElement("div", { className: "xioo-flow-body", style: { height: this.state.size.flowHeight } },
                mode === 'edit' && (react_1.default.createElement("div", { className: "xioo-flow-body-node", ref: this.nodePanelContainer, style: { width: this.state.size.listWidth } },
                    react_1.default.createElement(NodePanelGroup_1.default, { groupNodeList: this.props.groupNodeList }))),
                react_1.default.createElement("div", { className: "xioo-flow-body-flow", ref: this.workflowContainer, style: { width: mode === 'edit' ? this.state.size.flowWidth : this.state.size.flowWidth + baseSize.listWidth, height: mode === 'edit' ? this.state.size.flowHeight : this.state.size.flowHeight + baseSize.toolHeight } }))));
    }
}
Flow.defaultProps = {
    groupNodeList: [],
    initNodes: [],
    initEdges: [],
    listeners: {},
    animate: false,
    commandList: [],
    registerBehaviors: [],
    treeGroup: false
};
exports.default = Flow;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(4));
__webpack_require__(46);
class index extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleFullScreen = () => {
            const el = this.props.xiooFlow.current;
            const rfs = el.requestFullScreen ||
                el.webkitRequestFullScreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullScreen;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
                return;
            }
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: "xioo-work-header" },
            react_1.default.createElement("div", { className: "xioo-work-header-group" },
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon", "data-command": "undo" },
                    react_1.default.createElement("span", { className: "operate fa fa-mail-reply" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u64A4\u9500")),
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon", "data-command": "redo" },
                    react_1.default.createElement("span", { className: "operate fa fa-mail-forward" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u6062\u590D"))),
            react_1.default.createElement("div", { className: "xioo-work-header-group" },
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon", "data-command": "copy" },
                    react_1.default.createElement("span", { className: "operate fa fa-clone" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u590D\u5236")),
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon", "data-command": "delete" },
                    react_1.default.createElement("span", { className: "operate fa fa-trash-o" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u5220\u9664"))),
            react_1.default.createElement("div", { className: "xioo-work-header-group" },
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon actionable", "data-command": "blow", "data-params": `${JSON.stringify({ value: 0.1 })}` },
                    react_1.default.createElement("span", { className: "operate fa fa-search-plus" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u653E\u5927")),
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon actionable", "data-command": "blow", "data-params": `${JSON.stringify({ value: -0.1 })}` },
                    react_1.default.createElement("span", { className: "operate fa fa-search-minus" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u7F29\u5C0F")),
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon actionable", "data-command": "fitView" },
                    react_1.default.createElement("span", { className: "operate fa fa-laptop" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u9002\u5E94\u753B\u5E03")),
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon actionable", "data-command": "originSize" },
                    react_1.default.createElement("span", { className: "operate fa fa-calendar-check-o" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u5B9E\u9645\u5927\u5C0F")),
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon actionable", "data-command": "layout" },
                    react_1.default.createElement("span", { className: "operate fa fa-cube" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u91CD\u65B0\u5E03\u5C40"))),
            react_1.default.createElement("div", { className: "xioo-work-header-group" },
                react_1.default.createElement("div", { className: "xioo-work-header-group-icon actionable", "data-command": "fullScreen", "data-params": `${JSON.stringify({ domId: 'xioo-flow' })}` },
                    react_1.default.createElement("span", { className: "operate fa fa-window-maximize" }),
                    react_1.default.createElement("span", { className: "icon-text" }, "\u5168\u5C4F"))),
            react_1.default.Children.map(this.props.children, (child, index) => {
                const childProps = child.props;
                return react_1.default.cloneElement(child, childProps);
            })));
    }
}
exports.default = index;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(7);
            var content = __webpack_require__(47);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".xioo-work-header {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.xioo-work-header .xioo-work-header-group {\n  display: flex;\n  padding: 0px 8px;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon {\n  width: 30px;\n  height: 30px;\n  border: 1px solid transparent;\n  transition: 0.3s;\n  border-radius: 2px;\n  margin: 0 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon.actionable .operate {\n  color: #404040;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon .icon-text {\n  display: none;\n  position: absolute;\n  font-size: 12px;\n  height: 20px;\n  width: 60px;\n  background: #1990FF;\n  border-radius: 4px;\n  justify-content: center;\n  align-items: center;\n  top: 35px;\n  color: #fff;\n  border: 1px solid #0184FF;\n  box-shadow: 0 2px 4px 1px #c0c0c0;\n  opacity: 0;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon .icon-text::before {\n  content: '';\n  border: 10px solid transparent;\n  border-bottom-color: #1990FF;\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  top: -20px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon:hover {\n  border: 1px solid #f0f0f0;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon:hover .operate {\n  color: #1990FF;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon:hover .icon-text {\n  display: flex;\n  transition: 0.3s;\n  opacity: 1;\n}\n.xioo-work-header .xioo-work-header-group .xioo-work-header-group-icon .operate {\n  font-size: 18px;\n  color: #A2A2A2;\n  transition: 0.3s;\n}\n.xioo-work-header .xioo-work-header-group + .xioo-work-header-group {\n  border-left: 1px solid #f0f0f0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(4));
const NodeGenerate_1 = __importDefault(__webpack_require__(49));
__webpack_require__(50);
class NodePanelGroup extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            panelVisible: {},
            nodePanelGroup: []
        };
        this.initNodeData = () => {
            const { panelVisible } = this.state;
            const { groupNodeList } = this.props;
            const nodePanelGroup = groupNodeList.map(group => {
                panelVisible[group.groupKey] = group.defaultOpen ? group.defaultOpen : false;
                group.nodes = group.nodes.map(item => {
                    const attr = Object.assign(Object.assign({}, (item.style || {})), { img: item.icon, text: item.text, thumbnail: item.thumbnail, position: item.position, nodeType: item.nodeType, model: item.model || {} });
                    item.attrs = attr;
                    return item;
                });
                return group;
            });
            this.setState({ nodePanelGroup, panelVisible });
        };
        this.handlePanelHeader = (groupKey) => {
            const { panelVisible } = this.state;
            panelVisible[groupKey] = !panelVisible[groupKey];
            this.setState({ panelVisible });
        };
    }
    componentDidMount() {
        this.initNodeData();
    }
    get NodePanel() {
        const { nodePanelGroup = [] } = this.state;
        return nodePanelGroup.map(item => {
            return (react_1.default.createElement("div", { className: "flow-group-panel", key: item.groupKey },
                react_1.default.createElement("div", { className: "flow-group-panel-header", onClick: () => this.handlePanelHeader(item.groupKey) },
                    react_1.default.createElement("div", { className: `flow-group-panel-header-title ${this.state.panelVisible[item.groupKey] ? 'active' : ''}` },
                        react_1.default.createElement("div", { className: "flow-group-panel-header-icon" },
                            react_1.default.createElement("span", { className: `fa ${item.groupIcon}` })),
                        react_1.default.createElement("div", { className: "flow-group-panel-header-name" }, item.groupName)),
                    react_1.default.createElement("div", { className: "flow-group-panel-header-drop" },
                        react_1.default.createElement("span", { className: `fa fa-chevron-right flow-drop-down ${this.state.panelVisible[item.groupKey] ? 'active' : ''}` }))),
                react_1.default.createElement("div", { className: `flow-group-panel-body ${this.state.panelVisible[item.groupKey] ? 'active' : 'unactive'}`, style: {
                        height: `${this.state.panelVisible[item.groupKey] ? 84 * item.nodes.length + 'px' : '0px'}`
                    } }, item.nodes && item.nodes.map((node, index) => {
                    return react_1.default.createElement(NodeGenerate_1.default, { key: node.nodeType + index, node: node });
                }))));
        });
    }
    render() {
        return (react_1.default.createElement("div", { className: "flow-group" }, this.NodePanel));
    }
}
exports.default = NodePanelGroup;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(4));
const HtmlNodes = {
    rect: (attr) => {
        return (react_1.default.createElement("div", { className: "panel-node rect" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: `node-item rect`, style: {
                    width: 100,
                    height: 50,
                    backgroundColor: attr.fill,
                    border: `2px solid ${attr.stroke}`,
                    borderRadius: 4
                } }, attr.img && react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon" })),
            attr.text));
    },
    circle: (attr) => {
        return (react_1.default.createElement("div", { className: "panel-node circle" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: "node-item circle", style: {
                    width: 50,
                    height: 50,
                    backgroundColor: attr.fill,
                    border: `2px solid ${attr.stroke}`,
                    borderRadius: '50%'
                } },
                react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon" })),
            attr.text));
    },
    trigon: (attr) => {
        const position = {
            top: '▲',
            bottom: '▼',
            left: '◀︎',
            right: '▶'
        };
        const insert = {
            top: '10px 0 0',
            bottom: '0 0 14px 0',
            left: '0 0 0 10px',
            right: '0 20px 8px 0'
        };
        const insertStyle = {
            inset: insert[attr.position]
        };
        return (react_1.default.createElement("div", { className: "panel-node circle" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: "node-item", style: {
                    fontSize: 64,
                    color: attr.fill,
                    lineHeight: '50px',
                    backgroundColor: 'transparent',
                    position: 'relative'
                } },
                react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon", style: Object.assign(Object.assign({ position: 'absolute' }, insertStyle), { margin: 'auto', width: 30, height: 30 }) }),
                position[attr.position ? attr.position : 'top']),
            attr.text));
    },
    diamond: (attr) => {
        return (react_1.default.createElement("div", { className: "panel-node" },
            react_1.default.createElement("div", { draggable: "true", "data-item": JSON.stringify(attr), className: `node-item diamond`, style: {
                    width: 35,
                    height: 35,
                    backgroundColor: attr.fill,
                    border: `2px solid ${attr.stroke}`,
                    borderRadius: 4
                } }, attr.img && react_1.default.createElement("img", { src: attr.img, className: "panel-node-rect-icon diamond" })),
            attr.text));
    }
};
const HtmlNode = ({ node }) => {
    return HtmlNodes[node.thumbnail](node.attrs);
};
exports.default = HtmlNode;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(7);
            var content = __webpack_require__(51);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flow-group {\n  font-size: 12px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header {\n  height: 40px;\n  width: 100%;\n  border: 1px solid #c0c0c0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title {\n  display: flex;\n  align-items: center;\n  color: #504f4f;\n  transition: 0.3s;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title.active {\n  color: #007ef5;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title .flow-group-panel-header-name {\n  font-size: 14px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-title .flow-group-panel-header-icon {\n  font-size: 14px;\n  margin-right: 8px;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-drop .flow-drop-down {\n  transition: 0.3s;\n}\n.flow-group .flow-group-panel .flow-group-panel-header .flow-group-panel-header-drop .flow-drop-down.active {\n  transform: rotate(90deg);\n  color: #007ef5;\n}\n.flow-group .flow-group-panel .flow-group-panel-body {\n  background-color: #f3f2f2;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease;\n  overflow: hidden;\n}\n.flow-group .flow-group-panel .flow-group-panel-body.show {\n  display: flex;\n}\n.flow-group .flow-group-panel .flow-group-panel-body.hide {\n  display: none;\n}\n.flow-group .panel-node {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: move;\n  position: relative;\n  flex-flow: column;\n  width: 100%;\n  margin-top: 8px;\n}\n.flow-group .panel-node .node-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.flow-group .panel-node .node-item .panel-node-rect-icon {\n  height: 30px;\n  width: 30px;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.flow-group .panel-node .node-item .panel-node-rect-icon.diamond {\n  transform: rotate(-45deg);\n  width: 25px;\n  height: 25px;\n}\n.flow-group .panel-node .node-item.diamond {\n  transform: rotate(45deg);\n  margin-bottom: 10px;\n}\n.flow-group .panel-node + .panel-node {\n  border-top: 1px solid #c0c0c0;\n}\n.flow-group .panel-node + .panel-node .node-item {\n  margin-top: 8px;\n}\n@keyframes GroupHeaderUp {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes GroupHeaderDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    height: 0px;\n    opacity: 0;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(3);
class AddNodePanel {
    constructor(cfgs) {
        this._cfgs = util_1.deepMix(this.getDefaultCfg(), cfgs);
    }
    getDefaultCfg() {
        return { container: null };
    }
    get(key) {
        return this._cfgs[key];
    }
    set(key, val) {
        this._cfgs[key] = val;
    }
    initPlugin(graph) {
        const parentNode = this.get('container');
        const children = parentNode.querySelectorAll('div[data-item]');
        util_1.each(children, (child, i) => {
            child.addEventListener('dragstart', e => {
                graph.set('addNodeDragging', true);
                const nodeData = child.getAttribute('data-item');
                const nodeModel = JSON.parse(nodeData);
                const model = Object.assign({ nodeType: nodeModel.nodeName, offsetX: e.offsetX, offsetY: e.offsetY }, nodeModel);
                graph.set('addNodeModel', model);
            });
            child.addEventListener('dragend', e => {
                graph.emit('canvas:mouseup', e);
                graph.set('addNodeDragging', false);
            });
        });
    }
    destroy() {
        this.get('canvas').destroy();
        const container = this.get('container');
        container.parentNode.removeChild(container);
    }
}
exports.default = AddNodePanel;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(3);
const MacroCommand_1 = __importDefault(__webpack_require__(11));
class CommandPlugin {
    constructor(cfgs = {}) {
        this._cfgs = util_1.deepMix(this.getDefaultCfg(), cfgs);
    }
    getDefaultCfg() {
        return { container: null };
    }
    get(key) {
        return this._cfgs[key];
    }
    set(key, val) {
        this._cfgs[key] = val;
    }
    initPlugin(graph) {
        graph.set('MacroCommand', MacroCommand_1.default);
    }
    destroy() {
    }
}
exports.default = CommandPlugin;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(3);
const select = ['copy', 'delete'];
class TooBarPlugin {
    constructor(cfgs) {
        this._cfgs = util_1.deepMix(this.getDefaultCfg(), cfgs);
    }
    getDefaultCfg() {
        return { container: null };
    }
    get(key) {
        return this._cfgs[key];
    }
    set(key, val) {
        this._cfgs[key] = val;
    }
    initPlugin(graph) {
        const parentNode = this.get('container');
        const children = parentNode.querySelectorAll('.xioo-work-header .xioo-work-header-group div[data-command]');
        util_1.each(children, (child) => {
            const name = child.getAttribute('data-command');
            let params = child.getAttribute('data-params');
            params = params ? JSON.parse(params) : {};
            child.addEventListener('click', () => {
                const command = graph.get('MacroCommand');
                command && command.executeCommand(name, Object.assign({ graph }, params));
            });
        });
        graph.on('onSelectNode', (item) => {
            select.forEach(key => {
                const CopyDOM = parentNode.querySelector(`.xioo-work-header .xioo-work-header-group div[data-command='${key}']`);
                CopyDOM.classList.add('actionable');
            });
        });
        graph.on('onClearSelectNode', () => {
            select.forEach(key => {
                const CopyDOM = parentNode.querySelector(`.xioo-work-header .xioo-work-header-group div[data-command='${key}']`);
                CopyDOM.classList.remove('actionable');
            });
        });
    }
    destroy() {
        this.get('canvas').destroy();
        const container = this.get('container');
        container.parentNode.removeChild(container);
    }
}
exports.default = TooBarPlugin;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MacroCommand_1 = __importDefault(__webpack_require__(11));
const reload_1 = __importDefault(__webpack_require__(56));
const copy_1 = __importDefault(__webpack_require__(57));
const delete_1 = __importDefault(__webpack_require__(58));
const blow_1 = __importDefault(__webpack_require__(59));
const fitView_1 = __importDefault(__webpack_require__(60));
const originSize_1 = __importDefault(__webpack_require__(61));
const layout_1 = __importDefault(__webpack_require__(62));
const fullScreen_1 = __importDefault(__webpack_require__(63));
const undo_1 = __importDefault(__webpack_require__(64));
const redo_1 = __importDefault(__webpack_require__(65));
const docat_1 = __importDefault(__webpack_require__(66));
exports.default = (commontList = []) => {
    MacroCommand_1.default.registerCommand('reload', new reload_1.default());
    MacroCommand_1.default.registerCommand('copy', new copy_1.default());
    MacroCommand_1.default.registerCommand('delete', new delete_1.default());
    MacroCommand_1.default.registerCommand('blow', new blow_1.default());
    MacroCommand_1.default.registerCommand('fitView', new fitView_1.default());
    MacroCommand_1.default.registerCommand('originSize', new originSize_1.default());
    MacroCommand_1.default.registerCommand('layout', new layout_1.default());
    MacroCommand_1.default.registerCommand('fullScreen', new fullScreen_1.default());
    MacroCommand_1.default.registerCommand('undo', new undo_1.default());
    MacroCommand_1.default.registerCommand('redo', new redo_1.default());
    MacroCommand_1.default.registerCommand('docat', new docat_1.default());
    commontList.forEach(item => {
        MacroCommand_1.default.registerCommand(item.command, new item.CommandObject());
    });
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ReloadCommand {
    execute(cfg) {
        const graph = cfg.graph;
    }
}
exports.default = ReloadCommand;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CopyCommand {
    execute({ graph }) {
        const item = graph.get('selectedItem');
        if (!item) {
            return;
        }
        const model = item.get('model');
        const id = Math.random();
        graph.addItem('node', Object.assign(Object.assign({}, model), { x: model.x + 10, y: model.y + 10, id: `${id}` }));
        graph.paint();
        const MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph });
    }
}
exports.default = CopyCommand;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeleteCommand {
    execute({ graph }) {
        const item = graph.get('selectedItem');
        if (!item)
            return;
        graph.remove(item);
        graph.set('selectedItem', null);
        graph.emit('onClearSelectNode', null);
        const MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph });
    }
}
exports.default = DeleteCommand;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BlowCommand {
    execute({ graph, value }) {
        const zoom = graph.getZoom();
        const newValue = zoom + value;
        graph.zoomTo(newValue);
    }
}
exports.default = BlowCommand;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FitViewCommand {
    execute({ graph }) {
        graph.fitView(20);
    }
}
exports.default = FitViewCommand;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OriginSizeCommand {
    execute({ graph }) {
        graph.zoomTo(1);
    }
}
exports.default = OriginSizeCommand;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LayoutCommand {
    execute({ graph }) {
        graph.layout();
    }
}
exports.default = LayoutCommand;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FullScreenCommand {
    execute({ graph, domId }) {
        const el = document.getElementById(domId);
        const rfs = el.requestFullScreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullScreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
            graph.paint();
            return;
        }
    }
}
exports.default = FullScreenCommand;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(3);
class UndoCommand {
    execute({ graph }) {
        const undoStack = graph.getUndoStack();
        if (!undoStack || undoStack.length === 1) {
            return;
        }
        const currentData = undoStack.pop();
        if (currentData) {
            const { action } = currentData;
            graph.pushStack(action, util_1.clone(currentData.data), 'redo');
            let data = currentData.data.before;
            if (action === 'add') {
                data = currentData.data.after;
            }
            if (!data)
                return;
            switch (action) {
                case 'visible': {
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            const item = graph.findById(model.id);
                            if (model.visible) {
                                graph.showItem(item, false);
                            }
                            else {
                                graph.hideItem(item, false);
                            }
                        });
                    });
                    break;
                }
                case 'render':
                case 'update':
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            graph.updateItem(model.id, model, false);
                        });
                    });
                    break;
                case 'changedata':
                    graph.changeData(data, false);
                    break;
                case 'delete': {
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            const itemType = model.itemType;
                            delete model.itemType;
                            graph.addItem(itemType, model, false);
                        });
                    });
                    break;
                }
                case 'add':
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            graph.removeItem(model.id, false);
                        });
                    });
                    break;
                case 'updateComboTree':
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            graph.updateComboTree(model.id, model.parentId, false);
                        });
                    });
                    break;
                default:
            }
        }
        const MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph });
    }
}
exports.default = UndoCommand;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(3);
class RedoCommand {
    execute({ graph }) {
        const redoStack = graph.getRedoStack();
        if (!redoStack || redoStack.length === 0) {
            return;
        }
        const currentData = redoStack.pop();
        if (currentData) {
            const { action } = currentData;
            let data = currentData.data.after;
            graph.pushStack(action, util_1.clone(currentData.data));
            if (action === 'delete') {
                data = currentData.data.before;
            }
            if (!data)
                return;
            switch (action) {
                case 'visible': {
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            const item = graph.findById(model.id);
                            if (model.visible) {
                                graph.showItem(item, false);
                            }
                            else {
                                graph.hideItem(item, false);
                            }
                        });
                    });
                    break;
                }
                case 'render':
                case 'update':
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            graph.updateItem(model.id, model, false);
                        });
                    });
                    break;
                case 'changedata':
                    graph.changeData(data, false);
                    break;
                case 'delete':
                    if (data.edges) {
                        data.edges.forEach((model) => {
                            graph.removeItem(model.id, false);
                        });
                    }
                    if (data.nodes) {
                        data.nodes.forEach((model) => {
                            graph.removeItem(model.id, false);
                        });
                    }
                    if (data.combos) {
                        data.combos.forEach((model) => {
                            graph.removeItem(model.id, false);
                        });
                    }
                    break;
                case 'add': {
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            const itemType = model.itemType;
                            delete model.itemType;
                            graph.addItem(itemType, model, false);
                        });
                    });
                    break;
                }
                case 'updateComboTree':
                    Object.keys(data).forEach((key) => {
                        const array = data[key];
                        if (!array)
                            return;
                        array.forEach((model) => {
                            graph.updateComboTree(model.id, model.parentId, false);
                        });
                    });
                    break;
                default:
            }
        }
        const MacroCommand = graph.get('MacroCommand');
        MacroCommand.executeCommand('docat', { graph });
    }
}
exports.default = RedoCommand;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CopyCommand {
    execute({ graph }) {
        this.operationStyle('undo', graph);
        this.operationStyle('redo', graph);
    }
    operationStyle(attr, graph) {
        const dom = document.querySelector(`div[data-command="${attr}"]`);
        if (attr === 'undo') {
            const undoStack = graph.getUndoStack();
            this.addStyle(dom, !undoStack || undoStack.length === 1);
        }
        if (attr === 'redo') {
            const redoStack = graph.getRedoStack();
            this.addStyle(dom, !redoStack || redoStack.length === 0);
        }
    }
    addStyle(dom, isStyle) {
        if (isStyle) {
            dom.classList.remove('actionable');
        }
        else {
            dom.classList.add('actionable');
        }
    }
}
exports.default = CopyCommand;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(7);
            var content = __webpack_require__(68);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.xioo-flow {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  background-color: #fff;\n}\n.xioo-flow .xioo-flow-header {\n  height: 48px;\n  width: 100%;\n  background-color: #ffffff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 0px 24px;\n}\n.xioo-flow .xioo-flow-body {\n  display: flex;\n}\n.xioo-flow .xioo-flow-body .xioo-flow-body-node {\n  border-right: 1px solid #e0e0e0;\n  overflow: scroll;\n  height: 100%;\n}\n.xioo-flow .xioo-flow-body .xioo-flow-body-node .xioo-panel-item {\n  width: 100%;\n  height: 50px;\n  background-color: chocolate;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolItem = exports.ToolGroup = void 0;
const ToolGroup_1 = __importDefault(__webpack_require__(70));
exports.ToolGroup = ToolGroup_1.default;
const ToolItem_1 = __importDefault(__webpack_require__(72));
exports.ToolItem = ToolItem_1.default;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToolGroup_1 = __importDefault(__webpack_require__(71));
exports.default = ToolGroup_1.default;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(4));
const ToolGroup = react_1.memo(({ children, onChange }) => {
    return (react_1.default.createElement("div", { className: "xioo-work-header-group" }, react_1.default.Children.map(children, (child, index) => {
        let childProps = child.props;
        return react_1.default.cloneElement(child, Object.assign(Object.assign({}, childProps), { onChange }));
    })));
});
exports.default = ToolGroup;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToolItem_1 = __importDefault(__webpack_require__(73));
exports.default = ToolItem_1.default;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(4));
const ToolItem = react_1.memo(({ text, icon, command, params, status = true, event, onChange }) => {
    const [divProps, setDivParps] = react_1.useState({});
    const handleClick = () => {
        onChange && onChange(event);
    };
    react_1.useEffect(() => {
        const startProps = {};
        if (command) {
            startProps['data-command'] = command;
        }
        if (params) {
            startProps['data-params'] = JSON.stringify(params);
        }
        setDivParps(startProps);
    }, []);
    return (react_1.default.createElement("div", Object.assign({ className: `xioo-work-header-group-icon ${status ? 'actionable' : ''}` }, divProps, { onClick: handleClick }),
        react_1.default.createElement("span", { className: `operate fa ${icon}` }),
        react_1.default.createElement("span", { className: "icon-text" }, text)));
});
exports.default = ToolItem;


/***/ })
/******/ ]);
});