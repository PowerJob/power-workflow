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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerManger_1 = __importDefault(__webpack_require__(3));
var RegisterBehavior = (function (_super) {
    __extends(RegisterBehavior, _super);
    function RegisterBehavior(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = '';
        return _this;
    }
    RegisterBehavior.prototype.register = function (events) {
        if (events === void 0) { events = {}; }
        var self = this;
        this.G6.registerBehavior(this.name, __assign({ getEvents: this.getEvents }, events));
    };
    RegisterBehavior.prototype.getEvents = function () {
        return {};
    };
    return RegisterBehavior;
}(registerManger_1.default));
exports.default = RegisterBehavior;


/***/ }),
/* 1 */
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
            radius: 2,
            cursor: 'move'
        },
        childPath: {
            stroke: '#61B3FF'
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
        },
        cancel: {
            fill: '#A5A5A5'
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var registerNode_1 = __webpack_require__(9);
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var AnchorItem_1 = __importDefault(__webpack_require__(4));
var stateList = {
    'hoverNode': function (item, value) {
        var group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        var group = item.get('group');
        var nodeModel = item.getModel();
        if (value === 'hide') {
            var startPos = nodeModel.startPos;
            var endPos_1 = nodeModel.endPos;
            var distanceX = Math.abs(endPos_1.x - startPos.x);
            var distanceY = Math.abs(endPos_1.Y - startPos.Y);
            var disX_1 = 20 / 1000 * distanceX;
            var disY_1 = 20 / 1000 * distanceY;
            var startX_1 = nodeModel.startPos.x;
            var startY_1 = nodeModel.startPos.x;
            var inc_1 = setInterval(function () {
                if (startX_1 < endPos_1.x) {
                    clearInterval(inc_1);
                }
                item.update({
                    x: startX_1 -= disX_1,
                    y: startY_1 -= disY_1
                });
            }, 20);
        }
        else {
        }
    }
};
var calcStrLen = function calcStrLen(str) {
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
var BaseNode = (function (_super) {
    __extends(BaseNode, _super);
    function BaseNode(Grid, extendsed) {
        if (extendsed === void 0) { extendsed = false; }
        var _this = _super.call(this, Grid) || this;
        _this.name = 'base-node';
        _this.size = { width: 180, height: 70 };
        _this.canvas = null;
        if (!extendsed)
            _this.register();
        return _this;
    }
    BaseNode.prototype.draw = function (cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        var keyShape = this.drawKeyShape(cfg, group);
        return keyShape;
    };
    BaseNode.prototype.afterDraw = function (cfg, group, inc) {
    };
    BaseNode.prototype.updateShape = function (group, _a) {
        var _b = _a.index, index = _b === void 0 ? 0 : _b, props = __rest(_a, ["index"]);
        var currentShape = group.getChildByIndex(index);
        currentShape.attr(props);
    };
    BaseNode.prototype.getTextWidth = function (text) {
        this.canvas = this.canvas || document.createElement("canvas");
        var context = this.canvas.getContext("2d");
        context.font = "10px";
        var metrics = context.measureText(text);
        return metrics.width - text.length * 2;
    };
    BaseNode.prototype.getTextWidth1 = function (fontSize, text) {
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
    };
    BaseNode.prototype.getTextWidth2 = function (fontSize, text) {
        var fontWidth = fontSize;
        var width = this.calcStrLen(text) * fontWidth;
        return width / 2;
    };
    BaseNode.prototype.calcStrLen = function (str) {
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
    };
    ;
    BaseNode.prototype.withByContain = function (width, fontSize) {
        var fontWidth = fontSize;
        return width * 2 / fontWidth;
    };
    BaseNode.prototype.textWidthToEllipsis = function (_a) {
        var text = _a.text, _b = _a.threshold, threshold = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? this.size.width : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 12 : _d;
        var containCharacter = this.withByContain(width, fontSize) - threshold;
        var finalText = '';
        var len = 0;
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
    };
    BaseNode.prototype.drawKeyShape = function (cfg, group) {
        var width = this.size.width;
        var height = this.size.height;
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.base.origin), { width: width,
            height: height }), style);
        var keyShape = group.addShape('rect', {
            attrs: attrs,
            name: 'base-node',
            className: 'base-node'
        });
        this.initAnchor(group);
        return keyShape;
    };
    BaseNode.prototype.initAnchor = function (group, cfg) {
        var _this = this;
        if (cfg === void 0) { cfg = {}; }
        group.anchorShapes = [];
        group.showAnchor = function () {
            _this.drawAnchor(group, cfg);
        };
        group.clearAnchor = function () {
            _this.clearAnchor(group);
        };
    };
    BaseNode.prototype.drawAnchor = function (group, cfg) {
        if (cfg === void 0) { cfg = {}; }
        var bbox = group.get('children')[0].getBBox();
        this.getAnchorPoints(cfg).forEach(function (point, index) {
            var anchorContainer = group.addGroup();
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
    };
    BaseNode.prototype.clearAnchor = function (group) {
        group.anchorShapes && group.anchorShapes.forEach(function (a) { return a.remove(); });
        group.anchorShapes = [];
    };
    BaseNode.prototype.computeNodeSize = function (cfg) {
        var size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
        var width = size[0] ? size[0] : 180;
        var height = size[1] ? size[1] : 70;
        return { width: width, height: height };
    };
    BaseNode.prototype.getAnchorPoints = function (cfg) {
        return [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
        ];
    };
    BaseNode.prototype.setState = function (name, value, item) {
        stateList[name] && stateList[name].call(this, item, value);
    };
    return BaseNode;
}(registerNode_1.RegisterNode));
exports.default = BaseNode;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RegisterManger = (function () {
    function RegisterManger(G6) {
        this.extendedName = null;
        this.G6 = G6;
    }
    RegisterManger.prototype.register = function (events) {
        this.G6[this.registerType](this.name, {}, this.extendedName);
    };
    return RegisterManger;
}());
exports.default = RegisterManger;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = __importDefault(__webpack_require__(10));
var util_1 = __webpack_require__(5);
var Anchor = (function (_super) {
    __extends(Anchor, _super);
    function Anchor(props) {
        var _this = _super.call(this, util_1.deepMix(props, {
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
        })) || this;
        _this.enableCapture(true);
        _this.isAnchor = true;
        _this.toFront();
        return _this;
    }
    Anchor.prototype.showHotpot = function () {
        this.hotpot = this.getContainer().addShape('marker', {
            attrs: __assign(__assign({}, this.get('model').style), { r: 12, fill: '#1890FF', fillOpacity: .25 }),
            name: 'hotpot-shape',
            draggable: true,
        });
        this.hotpot.toFront();
    };
    Anchor.prototype.setHotspotActived = function (active) {
        this.hotpot && active && this.hotpot.attr ? this.hotpot.attr && this.hotpot.attr({ r: 14, fill: '#0084FF' }) : this.hotpot.attr && this.hotpot.attr({ r: 12, fill: '#1890FF' });
    };
    return Anchor;
}(item_1.default));
exports.default = Anchor;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@antv/util");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Workflow_1 = __importDefault(__webpack_require__(7));
exports.default = Workflow_1.default;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var g6_1 = __importStar(__webpack_require__(8));
var BaseNode_1 = __importDefault(__webpack_require__(2));
var FlowNode_1 = __importDefault(__webpack_require__(11));
var SimpleNode_1 = __importDefault(__webpack_require__(12));
var nodes_1 = __importDefault(__webpack_require__(13));
var CircleNode_1 = __importDefault(__webpack_require__(18));
var CvtePolyline_1 = __importDefault(__webpack_require__(19));
var CvtePolyline1_1 = __importDefault(__webpack_require__(21));
var circle_1 = __importDefault(__webpack_require__(22));
var BaseAnchor_1 = __importDefault(__webpack_require__(23));
var behavior_1 = __importDefault(__webpack_require__(26));
var config_1 = __webpack_require__(37);
var Util_1 = __webpack_require__(38);
var gird = new g6_1.default.Grid({});
var CvteWorkflow = (function () {
    function CvteWorkflow(_a) {
        var _this = this;
        var container = _a.container, _b = _a.width, width = _b === void 0 ? window.innerWidth : _b, _c = _a.height, height = _c === void 0 ? window.innerHeight : _c, _d = _a.plugins, plugins = _d === void 0 ? [] : _d, _e = _a.mode, mode = _e === void 0 ? "view" : _e, _f = _a.initEdges, initEdges = _f === void 0 ? [] : _f, _g = _a.initNodes, initNodes = _g === void 0 ? [] : _g, _h = _a.registerNodes, registerNodes = _h === void 0 ? [] : _h, edgeCallback = _a.edgeCallback, layout = _a.layout, registerNodeList = _a.registerNodeList, _j = _a.animate, animate = _j === void 0 ? false : _j, _k = _a.registerEdgeList, registerEdgeList = _k === void 0 ? [] : _k, _l = _a.registerBehaviors, registerBehaviors = _l === void 0 ? [] : _l, _m = _a.diffHeight, diffHeight = _m === void 0 ? 0 : _m, _o = _a.diffWidth, diffWidth = _o === void 0 ? 0 : _o;
        this.animate = false;
        this.registerEdgeList = [];
        this.registerBehaviors = [];
        this.diffHeight = 0;
        this.diffWidth = 0;
        this.util = new Util_1.FlowUtil();
        this.registerNodeByFront = function () {
            _this.registerNodeList.forEach(function (item) {
                var nodeDesc = item.nodeDesc;
                _this.G6.registerNode(item.nodeName, {
                    drawKeyShape: function (cfg, group) {
                        var _this = this;
                        var keyShape = null;
                        nodeDesc.forEach(function (node, index) {
                            if (index === 0) {
                                keyShape = _this.reloadDrawKeyShape(cfg, group, node);
                            }
                            else {
                                _this.reloadDrawKeyShape(cfg, group, node);
                            }
                        });
                        return keyShape;
                    },
                    reloadDrawKeyShape: function (cfg, group, node) {
                        var type = node.type, name = node.name, attrs = __rest(node, ["type", "name"]);
                        var other = {};
                        if (attrs.mainShape) {
                            other = {
                                width: this.size.width,
                                height: this.size.height
                            };
                        }
                        attrs = __assign(__assign({}, attrs), other);
                        return group.addShape(type, {
                            attrs: attrs,
                            name: name
                        });
                    }
                }, 'simple-node');
            });
        };
        this.reloadDrawKeyShape = function (cfg, group, node) {
            var type = node.type, name = node.name, attrs = __rest(node, ["type", "name"]);
            return group.addShape(type, {
                attrs: attrs,
                name: name
            });
        };
        this.edgeEndCallback = function (sourceNode, targetNode) {
            if (!_this.edgeCallback)
                return {};
            return _this.edgeCallback(sourceNode, targetNode);
        };
        this.container = container;
        var check = this.checkProps();
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
        if (typeof layout === 'string') {
            this.layout = layout ? config_1.layoutSetting[layout] : null;
        }
        else {
            this.layout = layout ? layout : null;
        }
        this.registerNodeList = registerNodeList || [];
        this.animate = animate;
        this.registerEdgeList = registerEdgeList;
        this.registerBehaviors = registerBehaviors;
        this.diffWidth = diffWidth;
        this.diffHeight = diffHeight;
        new BaseAnchor_1.default(g6_1.default);
        this.initRegister();
        this.init();
        if (this.diffHeight || this.diffWidth) {
            window.addEventListener('resize', this.util.debounce(function () { return _this.autoSize; }, 50));
        }
    }
    CvteWorkflow.prototype.init = function () {
        var _this = this;
        this.graph = new g6_1.Graph({
            container: this.container,
            width: this.width,
            height: this.height,
            enabledStack: true,
            plugins: __spreadArrays(this.plugins),
            modes: this.initMode(),
            layout: this.layout,
            animate: this.animate,
            defaultNode: {
                type: 'flow-node'
            },
            defaultEdge: {
                type: 'cvte-polyline'
            }
        });
        if (this.mode) {
            this.graph.setMode(this.mode);
        }
        this.graph.set('edgeEndCallback', this.edgeEndCallback);
        document.addEventListener('click', function (e) {
            if (e.target['nodeName'] === 'CANVAS') {
                return;
            }
            _this.graph.set('noKeyDown', true);
        });
        this.initData();
    };
    CvteWorkflow.prototype.changeMode = function () { };
    CvteWorkflow.prototype.getWorkflowData = function () { };
    CvteWorkflow.prototype.onSelectedItem = function () { };
    CvteWorkflow.prototype.addNode = function () { };
    CvteWorkflow.prototype.addEdge = function () { };
    CvteWorkflow.prototype.checkProps = function () {
        if (!this.container) {
            new Error("container is required!");
            return false;
        }
        return true;
    };
    CvteWorkflow.prototype.initMode = function () {
        return {
            default: ['drag-canvas', { type: "zoom-canvas", sensitivity: 1 }],
            edit: ['drag-canvas', 'cover-hover-node', 'cover-hover-anchor', 'cover-drag-node', 'cover-drag-anchor', 'cover-select-node', 'cover-hover-edge', 'cover-delete-item', 'cover-add-node', 'cover-align-node'],
            view: ['drag-canvas', 'cover-select-node']
        };
    };
    CvteWorkflow.prototype.initData = function () {
        var _this = this;
        var data = {
            nodes: this.initNodes,
            edges: this.initEdges
        };
        this.graph.data(data);
        this.graph.render();
        if (this.layout && this.animate) {
            console.log('我是la');
            setTimeout(function () {
                _this.graph.layout();
            }, 200);
        }
    };
    CvteWorkflow.prototype.initRegister = function () {
        var _this = this;
        __spreadArrays(nodes_1.default, [BaseNode_1.default, FlowNode_1.default], this.registerNodes).forEach(function (SelfNode) {
            new SelfNode(_this.G6);
        });
        __spreadArrays(behavior_1.default, this.registerBehaviors).forEach(function (Behavior) {
            new Behavior(_this.G6);
        });
        [CvtePolyline_1.default].forEach(function (SelfNode) {
            new SelfNode(_this.G6);
        });
        this.registerSideEdge();
        CvtePolyline1_1.default(g6_1.default);
        circle_1.default(g6_1.default);
        SimpleNode_1.default(g6_1.default);
        CircleNode_1.default(g6_1.default);
    };
    CvteWorkflow.prototype.autoSize = function () {
        var width = window.innerWidth - this.diffWidth;
        var height = window.innerHeight - this.diffHeight;
        this.changeSize(width, height);
    };
    CvteWorkflow.prototype.setData = function (data) {
        this.graph.data(data);
        this.graph.render();
    };
    CvteWorkflow.prototype.setMode = function (mode) {
        this.graph.setMode(mode);
    };
    CvteWorkflow.prototype.changeSize = function (width, height) {
        this.graph.changeSize(width, height);
    };
    CvteWorkflow.prototype.on = function (eventName, handler) {
        this.graph.on(eventName, handler);
    };
    CvteWorkflow.prototype.registerSideEdge = function () {
        var _this = this;
        this.registerEdgeList.forEach(function (item) {
            var name = item.name, extended = item.extended, register = item.register;
            if (extended) {
                _this.G6.registerEdge(name, register, extended);
            }
            else {
                _this.G6.registerEdge(name, register);
            }
        });
    };
    return CvteWorkflow;
}());
exports.default = CvteWorkflow;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterNode = void 0;
var registerManger_1 = __importDefault(__webpack_require__(3));
var RegisterNode = (function (_super) {
    __extends(RegisterNode, _super);
    function RegisterNode(G6) {
        var _this = _super.call(this, G6) || this;
        _this.name = '';
        _this.extendedName = '';
        return _this;
    }
    RegisterNode.prototype.register = function () {
        var self = this;
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
            test: function () { }
        });
    };
    ;
    RegisterNode.prototype.draw = function (cfg, group, inc) {
        var keyShape = group.addShape('rect', {
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
    };
    ;
    RegisterNode.prototype.update = function (cfg, group, inc) { };
    ;
    RegisterNode.prototype.afterUpdate = function (cfg, group, inc) { };
    ;
    RegisterNode.prototype.afterDraw = function (cfg, group, inc) { };
    RegisterNode.prototype.setState = function (name, value, item, inc) { };
    ;
    RegisterNode.prototype.drawAnchor = function (group) { };
    RegisterNode.prototype.getAnchorPoints = function (cfg, inc) {
        return [
            [0.5, 0],
            [1, 0.5],
            [0.5, 1],
            [0, 0.5],
        ];
    };
    return RegisterNode;
}(registerManger_1.default));
exports.RegisterNode = RegisterNode;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-core/lib/item/item");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var BaseNode_1 = __importDefault(__webpack_require__(2));
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var FlowNode = (function (_super) {
    __extends(FlowNode, _super);
    function FlowNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'flow-node';
        _this.register();
        return _this;
    }
    FlowNode.prototype.draw = function (cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        var keyShape = this.drawKeyShape(cfg, group);
        this.drawLeftText(cfg, group);
        this.drawTitleText(cfg, group);
        this.drawIcon(cfg.icon1, group, 6);
        this.drawIcon(cfg.icon2, group, 24);
        this.drawRightText(cfg, group);
        this.drawStatusShape(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    FlowNode.prototype.afterDraw = function (cfg, group) {
        if (cfg.taskStatusValue === 3) {
            this.drawStatusAnimateShape(cfg, group);
        }
        if (cfg.lineDashAnimate) {
            this.drawBorderAnimateShape(cfg, group);
        }
    };
    FlowNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateShape = function (_a) {
            var index = _a.index, props = __rest(_a, ["index"]);
            var currentShape = group.getChildByIndex(index);
            currentShape.attr(props);
        };
        var updateKeyShape = function (props) {
            updateShape(__assign({ index: 0 }, props));
            return group;
        };
        var updateLeftText = function (props) {
            updateShape(__assign({ index: 1 }, props));
            return group;
        };
        var updateText = function (props) {
            updateShape(__assign({ index: 2 }, props));
            return group;
        };
        var updateRightText = function (props) {
            updateShape(__assign({ index: 5 }, props));
            return group;
        };
        var updateIcon = function (props) {
            updateShape(__assign({ index: 3 }, props));
        };
        var size = this.size;
        var textWidthToEllipsis = function (_a) {
            var text = _a.text, _b = _a.threshold, threshold = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? size.width : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 14 : _d;
            return _this.textWidthToEllipsis({ text: text, threshold: threshold, width: width, fontSize: fontSize });
        };
        group.updateKeyShape = updateKeyShape;
        group.updateLeftText = updateLeftText;
        group.updateText = updateText;
        group.updateRightText = updateRightText;
        group.updateIcon = updateIcon;
        group.textWidthToEllipsis = textWidthToEllipsis;
    };
    FlowNode.prototype.drawLeftText = function (cfg, group) {
        var leftText = cfg.leftText, _a = cfg.leftTextStyle, leftTextStyle = _a === void 0 ? {} : _a;
        if (!leftText)
            return;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.leftText.origin), { text: leftText }), leftTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-left-text',
            className: 'node-left-text'
        });
    };
    FlowNode.prototype.drawRightText = function (cfg, group) {
        var rightText = cfg.rightText, _a = cfg.rightTextStyle, rightTextStyle = _a === void 0 ? {} : _a;
        var _b = this.size, width = _b.width, height = _b.height;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.rightText.origin), { text: rightText ? rightText : '', x: width - 12, y: height - 12 }), rightTextStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-right-text',
            className: 'right-text'
        });
    };
    FlowNode.prototype.drawTitleText = function (cfg, group) {
        var titleText = cfg.titleText, _a = cfg.titleTextStyle, titleTextStyle = _a === void 0 ? {} : _a;
        if (!titleText)
            return;
        var width = this.size.width;
        var height = this.size.height;
        titleText = this.textWidthToEllipsis({ text: titleText, fontSize: 14, width: this.size.width });
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.titleText.origin), { text: titleText, x: width / 2, y: height / 2 }), titleTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-title-text',
            className: 'node-title-text',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.getStatusStyle = function (cfg) {
        var taskStatusValue = cfg.taskStatusValue;
        var statusArr = [3, 4, 5, 10, 9];
        var style = {
            3: nodeStyle_1.default.statusShape.underway,
            1: nodeStyle_1.default.statusShape.waiting,
            5: nodeStyle_1.default.statusShape.success,
            4: nodeStyle_1.default.statusShape.faild,
            10: nodeStyle_1.default.statusShape.stop,
            9: nodeStyle_1.default.statusShape.cancel
        };
        if (!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0)
            taskStatusValue = 1;
        return style[taskStatusValue];
    };
    FlowNode.prototype.drawStatusShape = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus;
        if (!taskStatus)
            return;
        var selfStyle = this.getStatusStyle(cfg);
        this.drawStatusText(cfg, group);
        var attrs = __assign(__assign({}, selfStyle), { r: nodeStyle_1.default.statusShape.r, x: width - this.getTextWidth2(12, taskStatus) - 10, y: 12 });
        group.addShape('circle', {
            attrs: attrs,
            name: 'power-status-text',
            className: 'status-text',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.drawStatusText = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus, _a = cfg.taskStatusStyle, taskStatusStyle = _a === void 0 ? {} : _a;
        var selfStyle = this.getStatusStyle(cfg);
        var attrs = __assign(__assign(__assign(__assign({}, selfStyle), nodeStyle_1.default.statusShape.text), { text: taskStatus, x: width - this.getTextWidth2(12, taskStatus) / 2 - 4, y: 12 }), taskStatusStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-status-node',
            className: 'status-node',
            capture: true,
            draggable: true
        });
    };
    FlowNode.prototype.drawIcon = function (icon, group, x) {
        if (x === void 0) { x = 6; }
        var height = this.size.height;
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
    };
    FlowNode.prototype.drawStatusAnimateShape = function (cfg, group) {
        var width = this.size.width;
        var x = width - 52;
        var y = 12;
        var r = nodeStyle_1.default.statusShape.r;
        var back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
        var back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
        var back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
        this.createStatusAnimate(r, back1, 0);
        this.createStatusAnimate(r, back2, 1000);
        this.createStatusAnimate(r, back3, 2000);
    };
    FlowNode.prototype.drawBorderAnimateShape = function (cfg, group) {
        var keyShape = group.getChildByIndex(0);
        var index = 0;
        var lineDash = [6, 2, 1, 2];
        keyShape.animate(function () {
            index++;
            if (index > 9) {
                index = 0;
            }
            ;
            return {
                lineDash: lineDash,
                lineDashOffset: -index
            };
        }, {
            repeat: true,
            duration: 4000,
        });
    };
    FlowNode.prototype.createStatusAnimate = function (r, shape, delay) {
        shape.animate({
            r: r + 5,
            opacity: 0.1
        }, {
            duration: 3000,
            easing: "easeCubic",
            delay: delay,
            repeat: true
        });
    };
    FlowNode.prototype.createStatusAnimateShape = function (cfg, group, name, zIndex, opacity) {
        var width = this.size.width;
        var x = width - this.getTextWidth2(12, cfg.taskStatus) - 10;
        var y = 12;
        return group.addShape("circle", {
            zIndex: zIndex,
            attrs: {
                x: x,
                y: y,
                r: nodeStyle_1.default.statusShape.r,
                fill: nodeStyle_1.default.statusShape.underway.fill,
                opacity: opacity
            },
            name: name
        });
    };
    return FlowNode;
}(BaseNode_1.default));
exports.default = FlowNode;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AnchorItem_1 = __importDefault(__webpack_require__(4));
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var stateList = {
    'hoverNode': function (item, value) {
        var group = item.getContainer();
        if (value) {
            group.showAnchor();
        }
        else {
            group.clearAnchor();
        }
    },
    selectNode: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("opacity", 1);
        }
        else {
            current.attr("opacity", 0.6);
        }
    },
    visibleNode: function (item, value) {
        var group = item.get('group');
        var nodeModel = item.getModel();
        if (value === 'hide') {
            var startPos = nodeModel.startPos;
            var endPos_1 = nodeModel.endPos;
            var distanceX = Math.abs(endPos_1.x - startPos.x);
            var distanceY = Math.abs(endPos_1.Y - startPos.Y);
            var disX_1 = 20 / 1000 * distanceX;
            var disY_1 = 20 / 1000 * distanceY;
            var startX_1 = nodeModel.startPos.x;
            var startY_1 = nodeModel.startPos.x;
            var inc_1 = setInterval(function () {
                if (startX_1 < endPos_1.x) {
                    clearInterval(inc_1);
                }
                item.update({
                    x: startX_1 -= disX_1,
                    y: startY_1 -= disY_1
                });
            }, 20);
        }
        else {
        }
    }
};
function SimpleNode(Grid) {
    Grid.registerNode('simple-node', {
        draw: function (cfg, group, inc) {
            this.size = this.computeNodeSize(cfg);
            var keyShape = this.drawKeyShape(cfg, group);
            this.initAnchor(group);
            return keyShape;
        },
        drawKeyShape: function (cfg, group) {
            var width = this.size.width;
            var height = this.size.height;
            var _a = cfg.style, style = _a === void 0 ? {} : _a;
            var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.base.origin), { fill: '#BB0552', width: width,
                height: height }), style);
            var keyShape = group.addShape('rect', {
                attrs: attrs,
                name: 'base-node',
                className: 'base-node'
            });
            return keyShape;
        },
        initAnchor: function (group) {
            var _this = this;
            group.anchorShapes = [];
            group.showAnchor = function () {
                _this.drawAnchor(group);
            };
            group.clearAnchor = function () {
                _this.clearAnchor(group);
            };
        },
        clearAnchor: function (group) {
            group.anchorShapes && group.anchorShapes.forEach(function (a) { return a.remove(); });
            group.anchorShapes = [];
        },
        drawAnchor: function (group) {
            var bbox = group.get('children')[0].getBBox();
            this.getAnchorPoints().forEach(function (point, index) {
                var anchorContainer = group.addGroup();
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
        computeNodeSize: function (cfg) {
            var size = cfg.size && Array.isArray(cfg.size) ? cfg.size : [180, 70];
            var width = size[0] ? size[0] : 180;
            var height = size[1] ? size[1] : 70;
            return { width: width, height: height };
        },
        getAnchorPoints: function () {
            return [
                [0.5, 0],
                [1, 0.5],
                [0.5, 1],
                [0, 0.5],
            ];
        },
        setState: function (name, value, item) {
            stateList[name] && stateList[name].call(this, item, value);
        }
    });
}
exports.default = SimpleNode;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MaxCircleNode_1 = __importDefault(__webpack_require__(14));
var MaxTrigonNode_1 = __importDefault(__webpack_require__(15));
var MaxDiamondNode_1 = __importDefault(__webpack_require__(16));
var MaxFlowChildNode_1 = __importDefault(__webpack_require__(17));
exports.default = [MaxCircleNode_1.default, MaxTrigonNode_1.default, MaxDiamondNode_1.default, MaxFlowChildNode_1.default];


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = __importDefault(__webpack_require__(2));
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var MaxCircleNode = (function (_super) {
    __extends(MaxCircleNode, _super);
    function MaxCircleNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'max-circle-node';
        _this.register();
        return _this;
    }
    MaxCircleNode.prototype.drawKeyShape = function (cfg, group) {
        var width = this.size.width;
        var height = this.size.height;
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var _b = style.r, r = _b === void 0 ? 20 : _b;
        var attrs = __assign(__assign(__assign(__assign({}, nodeStyle_1.default.default), { fill: '#0577BB', stroke: '#028080' }), style), { x: r, y: r, r: r });
        var keyShape = group.addShape('circle', {
            attrs: attrs,
            name: 'max-circle-node',
            className: 'max-circle-node'
        });
        this.initAnchor(group);
        this.drawIcon(cfg, group);
        this.drawText(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    MaxCircleNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateKeyShape = function (props) {
            _this.updateShape(group, __assign({ index: 0 }, props));
            return group;
        };
        var updateIcon = function (props) {
            _this.updateShape(group, __assign({ index: 1 }, props));
        };
        var updateText = function (props) {
            _this.updateShape(group, __assign({ index: 2 }, props));
        };
        group.updateKeyShape = updateKeyShape;
        group.updateIcon = updateIcon;
        group.updateText = updateText;
    };
    MaxCircleNode.prototype.drawIcon = function (cfg, group) {
        group.addShape('image', {
            attrs: __assign(__assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: cfg.style.r - (cfg.iconWidth || 20) / 2, y: cfg.style.r - (cfg.iconHeight || 20) / 2, width: cfg.iconWidth || 20, height: cfg.iconHeight || 20 }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    };
    MaxCircleNode.prototype.drawText = function (cfg, group) {
        var text = cfg.text, _a = cfg.style, style = _a === void 0 ? {} : _a;
        var _b = style.textStyle, textStyle = _b === void 0 ? {} : _b, _c = style.r, r = _c === void 0 ? 20 : _c;
        group.addShape('text', {
            attrs: __assign({ text: text ? text : '', x: r, y: r * 2 + 8, textAlign: 'center', textBaseline: 'middle', fill: '#666', fontSize: 10 }, textStyle),
        });
    };
    return MaxCircleNode;
}(BaseNode_1.default));
exports.default = MaxCircleNode;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = __importDefault(__webpack_require__(2));
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var MaxCircleNode = (function (_super) {
    __extends(MaxCircleNode, _super);
    function MaxCircleNode(Grid, isRegister) {
        if (isRegister === void 0) { isRegister = true; }
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'max-trigon-node';
        isRegister && _this.register();
        return _this;
    }
    MaxCircleNode.prototype.drawKeyShape = function (cfg, group) {
        var width = this.size.width;
        var height = this.size.height;
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var _b = style.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = style.position, position = _c === void 0 ? 'top' : _c;
        var side8 = sideLength * 0.8;
        var side5 = sideLength * 0.5;
        var side1 = sideLength;
        var pointsPos = {
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
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.default), { points: pointsPos[position], fill: '#0577BB', stroke: '#028080' }), style);
        var keyShape = group.addShape('polygon', {
            attrs: attrs,
            name: 'max-trigon-node',
            className: 'max-trigon-node'
        });
        this.initAnchor(group, cfg);
        this.drawIcon(cfg, group);
        return keyShape;
    };
    MaxCircleNode.prototype.drawIcon = function (cfg, group) {
        var _a = cfg.style, _b = _a.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = _a.position, position = _c === void 0 ? 'top' : _c;
        var iconWidth = cfg.iconWidth || 20;
        var iconHeight = cfg.iconHeight || 20;
        var inValue = {
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
        var instance = inValue[position];
        var x = sideLength / 2 - iconWidth / 2 + instance.x;
        var y = sideLength / 2 - iconHeight / 2 + instance.y;
        group.addShape('image', {
            attrs: __assign(__assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: x,
                y: y, width: iconWidth, height: iconHeight }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    };
    MaxCircleNode.prototype.getAnchorPoints = function (cfg) {
        var _a = cfg.style, _b = _a.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = _a.position, position = _c === void 0 ? 'top' : _c;
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
    };
    return MaxCircleNode;
}(BaseNode_1.default));
exports.default = MaxCircleNode;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = __importDefault(__webpack_require__(2));
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var MaxDiamondNode = (function (_super) {
    __extends(MaxDiamondNode, _super);
    function MaxDiamondNode(Grid, isRegister) {
        if (isRegister === void 0) { isRegister = true; }
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'max-diamond-node';
        isRegister && _this.register();
        return _this;
    }
    MaxDiamondNode.prototype.drawKeyShape = function (cfg, group) {
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var _b = style.sideLength, sideLength = _b === void 0 ? 50 : _b;
        var dot = sideLength / 2;
        var points = [
            [dot, 0],
            [0, dot],
            [dot, sideLength],
            [sideLength, dot]
        ];
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.default), { path: [
                ['M', dot, 0],
                ['L', 0, dot],
                ['L', dot, sideLength],
                ['L', sideLength, dot],
                ['Z']
            ], fill: '#C7E4FF', stroke: '#61B3FF', opacity: 0.6, lineWidth: 2 }), style);
        var keyShape = group.addShape('path', {
            attrs: attrs,
            name: 'max-diamond-node',
            className: 'max-diamond-node'
        });
        this.initAnchor(group, cfg);
        this.drawIcon(cfg, group);
        this.drawText(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    MaxDiamondNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateKeyShape = function (props) {
            _this.updateShape(group, __assign({ index: 0 }, props));
            return group;
        };
        var updateIcon = function (props) {
            _this.updateShape(group, __assign({ index: 1 }, props));
        };
        var updateText = function (props) {
            _this.updateShape(group, __assign({ index: 2 }, props));
        };
        group.updateKeyShape = updateKeyShape;
        group.updateIcon = updateIcon;
        group.updateText = updateText;
    };
    MaxDiamondNode.prototype.drawIcon = function (cfg, group) {
        var _a = cfg.style, _b = _a.sideLength, sideLength = _b === void 0 ? 100 : _b, _c = _a.position, position = _c === void 0 ? 'top' : _c;
        var iconWidth = cfg.iconWidth || 20;
        var iconHeight = cfg.iconHeight || 20;
        var x = sideLength / 2 - iconWidth / 2;
        var y = sideLength / 2 - iconHeight / 2;
        group.addShape('image', {
            attrs: __assign(__assign({}, nodeStyle_1.default.default), { img: cfg.icon, x: x,
                y: y, width: iconWidth, height: iconHeight }),
            name: 'circle-image',
            capture: true,
            draggable: true
        });
    };
    MaxDiamondNode.prototype.drawText = function (cfg, group) {
        var _a = cfg.style, style = _a === void 0 ? {} : _a;
        var _b = style.sideLength, sideLength = _b === void 0 ? 50 : _b, _c = style.textStyle, textStyle = _c === void 0 ? {} : _c;
        if (cfg.text) {
            group.addShape('text', {
                attrs: __assign({ x: sideLength / 2, y: sideLength / 2, textAlign: 'center', textBaseline: 'middle', text: cfg.text, fontSize: 14, stroke: '#2E4553' }, textStyle),
                draggable: true,
                name: 'zhao'
            });
        }
    };
    return MaxDiamondNode;
}(BaseNode_1.default));
exports.default = MaxDiamondNode;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var BaseNode_1 = __importDefault(__webpack_require__(2));
var nodeStyle_1 = __importDefault(__webpack_require__(1));
var FlowChildNode = (function (_super) {
    __extends(FlowChildNode, _super);
    function FlowChildNode(Grid) {
        var _this = _super.call(this, Grid, true) || this;
        _this.name = 'flow-child-node';
        _this.register();
        return _this;
    }
    FlowChildNode.prototype.draw = function (cfg, group, inc) {
        this.size = this.computeNodeSize(cfg);
        var keyShape = this.drawKeyShape(cfg, group);
        this.drawLeftText(cfg, group);
        this.drawTitleText(cfg, group);
        this.drawIcon(cfg.icon1, group, 16);
        this.drawIcon(cfg.icon2, group, 34);
        this.drawRightText(cfg, group);
        this.drawStatusShape(cfg, group);
        this.drawChildPath(cfg, group);
        this.addShapeApi(cfg, group);
        return keyShape;
    };
    FlowChildNode.prototype.afterDraw = function (cfg, group) {
        if (cfg.taskStatusValue === 3) {
            this.drawStatusAnimateShape(cfg, group);
        }
        if (cfg.lineDashAnimate) {
            this.drawBorderAnimateShape(cfg, group);
        }
    };
    FlowChildNode.prototype.addShapeApi = function (cfg, group) {
        var _this = this;
        var updateShape = function (_a) {
            var index = _a.index, props = __rest(_a, ["index"]);
            var currentShape = group.getChildByIndex(index);
            currentShape.attr(props);
        };
        var updateKeyShape = function (props) {
            updateShape(__assign({ index: 0 }, props));
            return group;
        };
        var updateLeftText = function (props) {
            updateShape(__assign({ index: 1 }, props));
            return group;
        };
        var updateText = function (props) {
            updateShape(__assign({ index: 2 }, props));
            return group;
        };
        var updateRightText = function (props) {
            updateShape(__assign({ index: 5 }, props));
            return group;
        };
        var updateIcon = function (props) {
            updateShape(__assign({ index: 3 }, props));
        };
        var size = this.size;
        var textWidthToEllipsis = function (_a) {
            var text = _a.text, _b = _a.threshold, threshold = _b === void 0 ? 4 : _b, _c = _a.width, width = _c === void 0 ? size.width : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 14 : _d;
            return _this.textWidthToEllipsis({ text: text, threshold: threshold, width: width, fontSize: fontSize });
        };
        group.updateKeyShape = updateKeyShape;
        group.updateLeftText = updateLeftText;
        group.updateText = updateText;
        group.updateRightText = updateRightText;
        group.updateIcon = updateIcon;
        group.textWidthToEllipsis = textWidthToEllipsis;
    };
    FlowChildNode.prototype.drawChildPath = function (cfg, group) {
        console.log(cfg);
        console.log(group);
        var stroke = cfg.style.stroke;
        var _a = this.size, width = _a.width, height = _a.height;
        var x = cfg.x, y = cfg.y;
        var dis = 10;
        var strokeStyel = stroke ? stroke : nodeStyle_1.default.base.childPath.stroke;
        group.addShape('path', {
            attrs: {
                path: [
                    ['M', dis, 0],
                    ['L', dis, height]
                ],
                stroke: strokeStyel,
                lineWidth: 2,
                opacity: 0.6
            },
            name: 'chlid-flow-path1'
        });
        group.addShape('path', {
            attrs: {
                path: [
                    ['M', width - dis, 0],
                    ['L', width - dis, height]
                ],
                stroke: strokeStyel,
                lineWidth: 2,
                opacity: 0.6
            },
            name: 'chlid-flow-path2'
        });
    };
    FlowChildNode.prototype.drawLeftText = function (cfg, group) {
        var leftText = cfg.leftText, _a = cfg.leftTextStyle, leftTextStyle = _a === void 0 ? {} : _a;
        if (!leftText)
            return;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.leftText.origin), { text: leftText }), leftTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-left-text',
            className: 'node-left-text'
        });
    };
    FlowChildNode.prototype.drawRightText = function (cfg, group) {
        var rightText = cfg.rightText, _a = cfg.rightTextStyle, rightTextStyle = _a === void 0 ? {} : _a;
        var _b = this.size, width = _b.width, height = _b.height;
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.rightText.origin), { text: rightText ? rightText : '', x: width - 18, y: height - 12 }), rightTextStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-right-text',
            className: 'right-text'
        });
    };
    FlowChildNode.prototype.drawTitleText = function (cfg, group) {
        var titleText = cfg.titleText, _a = cfg.titleTextStyle, titleTextStyle = _a === void 0 ? {} : _a;
        if (!titleText)
            return;
        var width = this.size.width;
        var height = this.size.height;
        titleText = this.textWidthToEllipsis({ text: titleText, fontSize: 14, width: this.size.width });
        var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.titleText.origin), { text: titleText, x: width / 2, y: height / 2 }), titleTextStyle);
        return group.addShape('text', {
            attrs: attrs,
            name: 'power-title-text',
            className: 'node-title-text',
            capture: true,
            draggable: true
        });
    };
    FlowChildNode.prototype.getStatusStyle = function (cfg) {
        var taskStatusValue = cfg.taskStatusValue;
        var statusArr = [3, 4, 5, 10];
        var style = {
            3: nodeStyle_1.default.statusShape.underway,
            1: nodeStyle_1.default.statusShape.waiting,
            5: nodeStyle_1.default.statusShape.success,
            4: nodeStyle_1.default.statusShape.faild,
            10: nodeStyle_1.default.statusShape.stop
        };
        if (!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0)
            taskStatusValue = 1;
        return style[taskStatusValue];
    };
    FlowChildNode.prototype.drawStatusShape = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus;
        if (!taskStatus)
            return;
        var selfStyle = this.getStatusStyle(cfg);
        this.drawStatusText(cfg, group);
        var attrs = __assign(__assign({}, selfStyle), { r: nodeStyle_1.default.statusShape.r, x: width - this.getTextWidth2(12, taskStatus) - 20, y: 12 });
        group.addShape('circle', {
            attrs: attrs,
            name: 'power-status-text',
            className: 'status-text',
            capture: true,
            draggable: true
        });
    };
    FlowChildNode.prototype.drawStatusText = function (cfg, group) {
        var width = this.size.width;
        var taskStatus = cfg.taskStatus, _a = cfg.taskStatusStyle, taskStatusStyle = _a === void 0 ? {} : _a;
        var selfStyle = this.getStatusStyle(cfg);
        var attrs = __assign(__assign(__assign(__assign({}, selfStyle), nodeStyle_1.default.statusShape.text), { text: taskStatus, x: width - this.getTextWidth2(12, taskStatus) / 2 - 14, y: 12 }), taskStatusStyle);
        group.addShape('text', {
            attrs: attrs,
            name: 'power-status-node',
            className: 'status-node',
            capture: true,
            draggable: true
        });
    };
    FlowChildNode.prototype.drawIcon = function (icon, group, x) {
        if (x === void 0) { x = 6; }
        var height = this.size.height;
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
    };
    FlowChildNode.prototype.drawStatusAnimateShape = function (cfg, group) {
        var width = this.size.width;
        var x = width - 52;
        var y = 12;
        var r = nodeStyle_1.default.statusShape.r;
        var back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
        var back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
        var back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
        this.createStatusAnimate(r, back1, 0);
        this.createStatusAnimate(r, back2, 1000);
        this.createStatusAnimate(r, back3, 2000);
    };
    FlowChildNode.prototype.drawBorderAnimateShape = function (cfg, group) {
        var keyShape = group.getChildByIndex(0);
        var index = 0;
        var lineDash = [6, 2, 1, 2];
        keyShape.animate(function () {
            index++;
            if (index > 9) {
                index = 0;
            }
            ;
            return {
                lineDash: lineDash,
                lineDashOffset: -index
            };
        }, {
            repeat: true,
            duration: 4000,
        });
    };
    FlowChildNode.prototype.createStatusAnimate = function (r, shape, delay) {
        shape.animate({
            r: r + 5,
            opacity: 0.1
        }, {
            duration: 3000,
            easing: "easeCubic",
            delay: delay,
            repeat: true
        });
    };
    FlowChildNode.prototype.createStatusAnimateShape = function (cfg, group, name, zIndex, opacity) {
        var width = this.size.width;
        var x = width - this.getTextWidth2(12, cfg.taskStatus) - 10;
        var y = 12;
        return group.addShape("circle", {
            zIndex: zIndex,
            attrs: {
                x: x,
                y: y,
                r: nodeStyle_1.default.statusShape.r,
                fill: nodeStyle_1.default.statusShape.underway.fill,
                opacity: opacity
            },
            name: name
        });
    };
    return FlowChildNode;
}(BaseNode_1.default));
exports.default = FlowChildNode;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodeStyle_1 = __importDefault(__webpack_require__(1));
function CircleTestNode(Grid) {
    Grid.registerNode('circle-test-node', {
        drawKeyShape: function (cfg, group) {
            var width = this.size.width;
            var height = this.size.height;
            var _a = cfg.style, style = _a === void 0 ? {} : _a;
            var attrs = __assign(__assign(__assign({}, nodeStyle_1.default.base.origin), { fill: '#BB0552', r: 50 }), style);
            var keyShape = group.addShape('circle', {
                attrs: attrs,
                name: 'circle-test-node-1',
                className: 'circle-test-node'
            });
            return keyShape;
        },
        getAnchorPoints: function () {
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var registerEdge_1 = __webpack_require__(20);
var uniqBy = function (arr, key) {
    var result = [];
    arr.forEach(function (i) {
        if (!result.find(function (r) { return r[key] === i[key]; }))
            result.push(i);
    });
    return result;
};
var CvtePolyline = (function (_super) {
    __extends(CvtePolyline, _super);
    function CvtePolyline(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cvte-polyline1';
        _this.extendedName = 'polyline';
        _this.register();
        return _this;
    }
    CvtePolyline.prototype.draw = function (cfg, group) {
        this.group = group;
        var startPoint = cfg.startPoint;
        var endPoint = cfg.endPoint;
        var shape = group.addShape('path', {
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
    };
    CvtePolyline.prototype.computePath = function (cfg) {
        var startPoint = cfg.startPoint;
        var endPoint = cfg.endPoint;
        var controlPoints = this.getControlPoints(cfg);
        var points = [startPoint];
        if (controlPoints) {
            points = points.concat(controlPoints);
        }
        points.push(endPoint);
        return this.getPath(points);
    };
    CvtePolyline.prototype.getControlPoints = function (cfg) {
        if (!cfg.sourceNode) {
            return cfg.controlPoints;
        }
        var obj = {
            sNode: cfg.sourceNode,
            tNode: cfg.targetNode,
            sPort: cfg.startPoint,
            tPort: cfg.endPoint,
            offset: 15
        };
        return this.polylineFinding(obj);
    };
    CvtePolyline.prototype.polylineFinding = function (_a) {
        var sNode = _a.sNode, tNode = _a.tNode, sPort = _a.sPort, tPort = _a.tPort, offset = _a.offset;
        var sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
        var targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
        var sBBox = this.getExpandedBBox(sourceBBox, offset);
        var tBBox = this.getExpandedBBox(targetBBox, offset);
        var sPoint = this.getExpandedPort(sBBox, sPort);
        var tPoint = this.getExpandedPort(tBBox, tPort);
        var points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
        points = this.filterConnectablePoints(points, sBBox);
        points = this.filterConnectablePoints(points, tBBox);
        var polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
        return polylinePoints;
    };
    CvtePolyline.prototype.getPointBBox = function (t) {
        return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
    };
    CvtePolyline.prototype.getExpandedBBox = function (bbox, offset) {
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
    };
    CvtePolyline.prototype.getExpandedPort = function (bbox, point) {
        return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
            ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
            : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
    };
    CvtePolyline.prototype.getConnectablePoints = function (sBBox, tBBox, sPoint, tPoint) {
        var _this = this;
        var lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
        var outerBBox = this.combineBBoxes(sBBox, tBBox);
        var sLineBBox = this.combineBBoxes(sBBox, lineBBox);
        var tLineBBox = this.combineBBoxes(tBBox, lineBBox);
        var points = [];
        points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
        var centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
        [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(function (bbox) {
            points = points.concat(_this.crossPointsByLineAndBBox(bbox, centerPoint));
        });
        points.push({ x: sPoint.x, y: tPoint.y });
        points.push({ x: tPoint.x, y: sPoint.y });
        return points;
    };
    CvtePolyline.prototype.combineBBoxes = function (sBBox, tBBox) {
        var minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY), maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
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
    };
    CvtePolyline.prototype.vertexOfBBox = function (bbox) {
        return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
    };
    CvtePolyline.prototype.crossPointsByLineAndBBox = function (bbox, centerPoint) {
        var crossPoints = [];
        if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
            crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
        if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
            crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
        return crossPoints;
    };
    CvtePolyline.prototype.getBBoxFromVertexes = function (sPoint, tPoint) {
        var minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x), minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
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
    };
    CvtePolyline.prototype.filterConnectablePoints = function (points, bbox) {
        return points.filter(function (point) { return point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY; });
    };
    CvtePolyline.prototype.AStar = function (points, sPoint, tPoint, sBBox, tBBox) {
        var _this = this;
        var openList = [sPoint];
        var closeList = [];
        points = uniqBy(this.fillId(points), 'id');
        points.push(tPoint);
        var endPoint;
        var _loop_1 = function () {
            var minCostPoint;
            openList.forEach(function (p, i) {
                if (!p.parent)
                    p.f = 0;
                if (!minCostPoint)
                    minCostPoint = p;
                if (p.f < minCostPoint.f)
                    minCostPoint = p;
            });
            if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
                endPoint = minCostPoint;
                return "break";
            }
            openList.splice(openList.findIndex(function (o) { return o.x === minCostPoint.x && o.y === minCostPoint.y; }), 1);
            closeList.push(minCostPoint);
            var neighbor = points.filter(function (p) { return (p.x === minCostPoint.x || p.y === minCostPoint.y)
                && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
                && !_this.crossBBox([sBBox, tBBox], minCostPoint, p); });
            neighbor.forEach(function (p) {
                var inOpen = openList.find(function (o) { return o.x === p.x && o.y === p.y; });
                var currentG = _this.getCost(p, minCostPoint);
                if (closeList.find(function (o) { return o.x === p.x && o.y === p.y; })) {
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
                    var h = _this.getCost(p, tPoint);
                    if (_this.crossBBox([tBBox], p, tPoint)) {
                        h += (tBBox.width / 2 + tBBox.height / 2);
                    }
                    p.h = h;
                    p.f = p.g + p.h;
                    openList.push(p);
                }
            });
        };
        while (openList.length > 0) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        if (endPoint) {
            var result = [];
            result.push({ x: endPoint.x, y: endPoint.y });
            while (endPoint.parent) {
                endPoint = endPoint.parent;
                result.push({ x: endPoint.x, y: endPoint.y });
            }
            return result.reverse();
        }
        return [];
    };
    CvtePolyline.prototype.fillId = function (points) {
        points.forEach(function (p) {
            p.id = p.x + '-' + p.y;
        });
        return points;
    };
    CvtePolyline.prototype.crossBBox = function (bboxes, p1, p2) {
        for (var i = 0; i < bboxes.length; i++) {
            var bbox = bboxes[i];
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
    };
    CvtePolyline.prototype.getCost = function (p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    };
    CvtePolyline.prototype.getPath = function (points) {
        var path = [];
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (i === 0) {
                path.push(['M', point.x, point.y]);
            }
            else if (i === points.length - 1) {
                path.push(['L', point.x, point.y]);
            }
            else {
                var prevPoint = points[i - 1];
                var nextPoint = points[i + 1];
                var cornerLen = 5;
                if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
                    if (prevPoint.x === point.x) {
                        path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                    }
                    else if (prevPoint.y === point.y) {
                        path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                    }
                }
                var yLen = Math.abs(point.y - nextPoint.y);
                var xLen = Math.abs(point.x - nextPoint.x);
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
    };
    return CvtePolyline;
}(registerEdge_1.RegisterEdge));
exports.default = CvtePolyline;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterEdge = void 0;
var registerManger_1 = __importDefault(__webpack_require__(3));
var RegisterEdge = (function (_super) {
    __extends(RegisterEdge, _super);
    function RegisterEdge(G6) {
        var _this = _super.call(this, G6) || this;
        _this.name = 'cvte-polyline';
        _this.extendedName = 'polyline';
        return _this;
    }
    RegisterEdge.prototype.register = function () {
        var self = this;
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
    };
    ;
    RegisterEdge.prototype.draw = function (cfg, group, inc) {
    };
    ;
    RegisterEdge.prototype.update = function (cfg, group, inc) { };
    ;
    RegisterEdge.prototype.afterUpdate = function (cfg, group, inc) { };
    ;
    RegisterEdge.prototype.afterDraw = function (cfg, group, inc) { };
    RegisterEdge.prototype.setState = function (name, value, item, inc) { };
    ;
    return RegisterEdge;
}(registerManger_1.default));
exports.RegisterEdge = RegisterEdge;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uniqBy = function (arr, key) {
    var result = [];
    arr.forEach(function (i) {
        if (!result.find(function (r) { return r[key] === i[key]; }))
            result.push(i);
    });
    return result;
};
var stateList = {
    hoverEdge: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
        if (value) {
            current.attr("stroke", '#60A1DE');
        }
        else {
            current.attr("stroke", '#164979');
        }
    },
    selectEdge: function (item, value) {
        var group = item.getContainer();
        var current = group.getChildByIndex(0);
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
        drawShape: function (cfg, group) {
            this.group = group;
            this.label = null;
            var startPoint = cfg.startPoint;
            var endPoint = cfg.endPoint;
            var shape = group.addShape('path', {
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
        computePath: function (cfg) {
            var startPoint = cfg.startPoint;
            var endPoint = cfg.endPoint;
            var controlPoints = this.getControlPoints(cfg);
            var points = [startPoint];
            if (controlPoints) {
                points = points.concat(controlPoints);
            }
            points.push(endPoint);
            return this.getPath(points);
        },
        drawLabel: function (cfg, group) {
            var labelCfg = cfg.labelCfg || {};
            console.log(cfg);
            var labelStyle = this.getLabelStyle(cfg, labelCfg, group);
            var label = group.addShape('text', {
                attrs: __assign({}, labelStyle)
            });
            var labelBBox = label.getBBox();
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
        afterUpdate: function (cfg, item) {
            var label = item.getContainer().findByClassName('edge-label');
            var labelRect = item.getContainer().findByClassName('edge-labelRect');
            if (label) {
                var labelBBox = label.getBBox();
                labelRect.attr({
                    x: labelBBox.x - 4 / 2,
                    y: labelBBox.y - 4 / 2,
                    width: labelBBox.width + 4,
                    height: labelBBox.height + 4,
                });
            }
        },
        getControlPoints: function (cfg) {
            if (!cfg.sourceNode) {
                return cfg.controlPoints;
            }
            var obj = {
                sNode: cfg.sourceNode,
                tNode: cfg.targetNode,
                sPort: cfg.startPoint,
                tPort: cfg.endPoint,
                offset: 15
            };
            return this.polylineFinding(obj);
        },
        polylineFinding: function (_a) {
            var sNode = _a.sNode, tNode = _a.tNode, sPort = _a.sPort, tPort = _a.tPort, offset = _a.offset;
            var sourceBBox = sNode && sNode.getBBox() ? sNode.getBBox() : this.getPointBBox(sPort);
            var targetBBox = tNode && tNode.getBBox() ? tNode.getBBox() : this.getPointBBox(tPort);
            var sBBox = this.getExpandedBBox(sourceBBox, offset);
            var tBBox = this.getExpandedBBox(targetBBox, offset);
            var sPoint = this.getExpandedPort(sBBox, sPort);
            var tPoint = this.getExpandedPort(tBBox, tPort);
            var points = this.getConnectablePoints(sBBox, tBBox, sPoint, tPoint);
            points = this.filterConnectablePoints(points, sBBox);
            points = this.filterConnectablePoints(points, tBBox);
            var polylinePoints = this.AStar(points, sPoint, tPoint, sBBox, tBBox);
            return polylinePoints;
        },
        getPointBBox: function (t) {
            return { centerX: t.x, centerY: t.y, minX: t.x, minY: t.y, maxX: t.x, maxY: t.y, height: 0, width: 0 };
        },
        getExpandedBBox: function (bbox, offset) {
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
        getExpandedPort: function (bbox, point) {
            return Math.abs(point.x - bbox.centerX) / bbox.width > Math.abs(point.y - bbox.centerY) / bbox.height
                ? { x: point.x > bbox.centerX ? bbox.maxX : bbox.minX, y: point.y }
                : { x: point.x, y: point.y > bbox.centerY ? bbox.maxY : bbox.minY };
        },
        getConnectablePoints: function (sBBox, tBBox, sPoint, tPoint) {
            var _this = this;
            var lineBBox = this.getBBoxFromVertexes(sPoint, tPoint);
            var outerBBox = this.combineBBoxes(sBBox, tBBox);
            var sLineBBox = this.combineBBoxes(sBBox, lineBBox);
            var tLineBBox = this.combineBBoxes(tBBox, lineBBox);
            var points = [];
            points = points.concat(this.vertexOfBBox(sLineBBox), this.vertexOfBBox(tLineBBox), this.vertexOfBBox(outerBBox));
            var centerPoint = { x: outerBBox.centerX, y: outerBBox.centerY };
            [outerBBox, sLineBBox, tLineBBox, lineBBox].forEach(function (bbox) {
                points = points.concat(_this.crossPointsByLineAndBBox(bbox, centerPoint));
            });
            points.push({ x: sPoint.x, y: tPoint.y });
            points.push({ x: tPoint.x, y: sPoint.y });
            return points;
        },
        combineBBoxes: function (sBBox, tBBox) {
            var minX = Math.min(sBBox.minX, tBBox.minX), minY = Math.min(sBBox.minY, tBBox.minY), maxX = Math.max(sBBox.maxX, tBBox.maxX), maxY = Math.max(sBBox.maxY, tBBox.maxY);
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
        vertexOfBBox: function (bbox) {
            return [{ x: bbox.minX, y: bbox.minY }, { x: bbox.maxX, y: bbox.minY }, { x: bbox.maxX, y: bbox.maxY }, { x: bbox.minX, y: bbox.maxY }];
        },
        crossPointsByLineAndBBox: function (bbox, centerPoint) {
            var crossPoints = [];
            if (!(centerPoint.x < bbox.minX || centerPoint.x > bbox.maxX))
                crossPoints = crossPoints.concat([{ x: centerPoint.x, y: bbox.minY }, { x: centerPoint.x, y: bbox.maxY }]);
            if (!(centerPoint.y < bbox.minY || centerPoint.y > bbox.maxY))
                crossPoints = crossPoints.concat([{ x: bbox.minX, y: centerPoint.y }, { x: bbox.maxX, y: centerPoint.y }]);
            return crossPoints;
        },
        getBBoxFromVertexes: function (sPoint, tPoint) {
            var minX = Math.min(sPoint.x, tPoint.x), maxX = Math.max(sPoint.x, tPoint.x), minY = Math.min(sPoint.y, tPoint.y), maxY = Math.max(sPoint.y, tPoint.y);
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
        filterConnectablePoints: function (points, bbox) {
            return points.filter(function (point) { return point.x <= bbox.minX || point.x >= bbox.maxX || point.y <= bbox.minY || point.y >= bbox.maxY; });
        },
        AStar: function (points, sPoint, tPoint, sBBox, tBBox) {
            var _this = this;
            var openList = [sPoint];
            var closeList = [];
            points = uniqBy(this.fillId(points), 'id');
            points.push(tPoint);
            var endPoint;
            var _loop_1 = function () {
                var minCostPoint;
                openList.forEach(function (p, i) {
                    if (!p.parent)
                        p.f = 0;
                    if (!minCostPoint)
                        minCostPoint = p;
                    if (p.f < minCostPoint.f)
                        minCostPoint = p;
                });
                if (minCostPoint.x === tPoint.x && minCostPoint.y === tPoint.y) {
                    endPoint = minCostPoint;
                    return "break";
                }
                openList.splice(openList.findIndex(function (o) { return o.x === minCostPoint.x && o.y === minCostPoint.y; }), 1);
                closeList.push(minCostPoint);
                var neighbor = points.filter(function (p) { return (p.x === minCostPoint.x || p.y === minCostPoint.y)
                    && !(p.x === minCostPoint.x && p.y === minCostPoint.y)
                    && !_this.crossBBox([sBBox, tBBox], minCostPoint, p); });
                neighbor.forEach(function (p) {
                    var inOpen = openList.find(function (o) { return o.x === p.x && o.y === p.y; });
                    var currentG = _this.getCost(p, minCostPoint);
                    if (closeList.find(function (o) { return o.x === p.x && o.y === p.y; })) {
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
                        var h = _this.getCost(p, tPoint);
                        if (_this.crossBBox([tBBox], p, tPoint)) {
                            h += (tBBox.width / 2 + tBBox.height / 2);
                        }
                        p.h = h;
                        p.f = p.g + p.h;
                        openList.push(p);
                    }
                });
            };
            while (openList.length > 0) {
                var state_1 = _loop_1();
                if (state_1 === "break")
                    break;
            }
            if (endPoint) {
                var result = [];
                result.push({ x: endPoint.x, y: endPoint.y });
                while (endPoint.parent) {
                    endPoint = endPoint.parent;
                    result.push({ x: endPoint.x, y: endPoint.y });
                }
                return result.reverse();
            }
            return [];
        },
        fillId: function (points) {
            points.forEach(function (p) {
                p.id = p.x + '-' + p.y;
            });
            return points;
        },
        crossBBox: function (bboxes, p1, p2) {
            for (var i = 0; i < bboxes.length; i++) {
                var bbox = bboxes[i];
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
        getCost: function (p1, p2) {
            return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
        },
        getPath: function (points) {
            var path = [];
            for (var i = 0; i < points.length; i++) {
                var point = points[i];
                if (i === 0) {
                    path.push(['M', point.x, point.y]);
                }
                else if (i === points.length - 1) {
                    path.push(['L', point.x, point.y]);
                }
                else {
                    var prevPoint = points[i - 1];
                    var nextPoint = points[i + 1];
                    var cornerLen = 5;
                    if (Math.abs(point.y - prevPoint.y) > cornerLen || Math.abs(point.x - prevPoint.x) > cornerLen) {
                        if (prevPoint.x === point.x) {
                            path.push(['L', point.x, point.y > prevPoint.y ? point.y - cornerLen : point.y + cornerLen]);
                        }
                        else if (prevPoint.y === point.y) {
                            path.push(['L', point.x > prevPoint.x ? point.x - cornerLen : point.x + cornerLen, point.y]);
                        }
                    }
                    var yLen = Math.abs(point.y - nextPoint.y);
                    var xLen = Math.abs(point.x - nextPoint.x);
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
        setState: function (name, value, item) {
            stateList[name] && stateList[name].call(this, item, value);
        }
    }, 'polyline');
}
exports.default = default_1;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(G6) {
    G6.registerEdge('cover-cricle', {
        draw: function (cfg, group) {
            var startPoint = cfg.startPoint;
            var endPoint = cfg.endPoint;
            var centerPoint = {
                x: (startPoint.x + endPoint.x) / 2,
                y: (startPoint.y + endPoint.y) / 2
            };
            var controlPoint = {
                x: (startPoint.x + centerPoint.x) / 2,
                y: startPoint.y
            };
            var path = group.addShape("path", {
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shapeBase_1 = __webpack_require__(24);
var shape_1 = __importDefault(__webpack_require__(25));
var registerManger_1 = __importDefault(__webpack_require__(3));
var BaseAnchor = (function (_super) {
    __extends(BaseAnchor, _super);
    function BaseAnchor(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.register();
        return _this;
    }
    BaseAnchor.prototype.register = function () {
        shape_1.default.registerFactory('anchor', {
            defaultShapeType: 'marker',
            getShape: function (type) {
                var shapeObj = Object.assign({}, shapeBase_1.shapeBase, {
                    type: 'marker',
                    itemType: type,
                    drawShape: function (cfg, group) {
                        var style = this.getShapeStyle(cfg);
                        var shape = group.addShape('marker', {
                            attrs: style,
                            name: 'anchor-shape',
                            draggable: true,
                        });
                        return shape;
                    },
                    setState: function (name, value, item) {
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
    };
    return BaseAnchor;
}(registerManger_1.default));
exports.default = BaseAnchor;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-core/lib/element/shapeBase");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@antv/g6-core/lib/element/shape");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hover_1 = __importDefault(__webpack_require__(27));
var hover_2 = __importDefault(__webpack_require__(28));
var drag_1 = __importDefault(__webpack_require__(29));
var drag_2 = __importDefault(__webpack_require__(30));
var select_1 = __importDefault(__webpack_require__(31));
var hover_3 = __importDefault(__webpack_require__(32));
var delete_1 = __importDefault(__webpack_require__(33));
var addNode_1 = __importDefault(__webpack_require__(34));
var align_1 = __importDefault(__webpack_require__(35));
exports.default = [hover_1.default, hover_2.default, drag_1.default, drag_2.default, select_1.default, hover_3.default, delete_1.default, addNode_1.default, align_1.default];


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onNodeMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverNode', true);
    },
    onNodeMouseLeave: function (e) {
        if (e.target.cfg.name === 'anchor-shape')
            return;
        this.graph.setItemState(e.item, 'hoverNode', false);
    }
};
var HoverNode = (function (_super) {
    __extends(HoverNode, _super);
    function HoverNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-hover-node';
        _this.register(Event);
        return _this;
    }
    HoverNode.prototype.getEvents = function () {
        return {
            'node:mouseenter': 'onNodeMouseEnter',
            'node:mouseleave': 'onNodeMouseLeave'
        };
    };
    return HoverNode;
}(registerBehavior_1.default));
exports.default = HoverNode;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onNodeMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverNode', true);
    },
    onNodeMouseLeave: function (e) {
        var node = e.item.getContainer().getParent();
        this.graph.setItemState(e.item, 'hoverAnchor', false);
        node && this.graph.setItemState(node.get('item'), 'hoverNode', false);
    },
    onAnchorMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverAnchor', true);
    }
};
var HoverAnchor = (function (_super) {
    __extends(HoverAnchor, _super);
    function HoverAnchor(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-hover-anchor';
        _this.register(Event);
        return _this;
    }
    HoverAnchor.prototype.getEvents = function () {
        return {
            'anchor:mouseleave': 'onNodeMouseLeave',
            'anchor:mouseenter': 'onAnchorMouseEnter'
        };
    };
    return HoverAnchor;
}(registerBehavior_1.default));
exports.default = HoverAnchor;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    origin: null,
    target: null,
    onNodeDragStart: function (e) {
        this.target = e.item;
        this.origin = {
            x: e.x,
            y: e.y
        };
    },
    onNodeDrag: function (e) {
        if (!this.origin)
            return;
        var model = this.target.get('model');
        var origin = this.origin;
        if (!this.point) {
            this.point = {
                x: model.x,
                y: model.y
            };
        }
        var x = e.x - origin.x + this.point.x;
        var y = e.y - origin.y + this.point.y;
        this.origin = { x: e.x, y: e.y };
        this.point = { x: x, y: y };
        this.moveDelegate(this.target, x, y);
    },
    onNodeDragEnd: function (e) {
        if (!this.origin) {
            return;
        }
        var delegateShape = e.item.get('delegateShape');
        var bbox = delegateShape.getBBox();
        var x = bbox.x + 3;
        var y = bbox.y + 3;
        delegateShape.remove();
        this.target.set('delegateShape', null);
        this.graph.updateItem(this.target, { x: x, y: y });
        var MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
        this.point = null;
        this.origin = null;
        this.graph.emit('afternodedragend');
    },
    moveDelegate: function (item, x, y) {
        var shape = item.get('delegateShape');
        var bbox = item.get('keyShape').getBBox();
        var keyShape = item.getKeyShape();
        var keyShapeAttr = keyShape.attr();
        if (!shape) {
            var parent_1 = this.graph.get('group');
            var attrs = {
                stroke: keyShapeAttr.stroke ? keyShapeAttr.stroke : '#1890FF',
                fill: keyShapeAttr.fill ? keyShapeAttr.fill : '#1890FF',
                fillOpacity: .08,
                lineDash: [4, 4],
                radius: 4,
                lineWidth: 1,
            };
            var other = {};
            if (keyShapeAttr.r) {
                other.radius = bbox.width / 2;
            }
            shape = parent_1.addShape('rect', {
                attrs: __assign(__assign({ width: bbox.width, height: bbox.height, x: x - bbox.width / 2, y: y - bbox.height / 2, nodeId: item.get('id') }, attrs), other)
            });
            item.set('delegateShape', shape);
        }
        shape.attr({ x: x, y: y });
        this.graph.paint();
        this.graph.emit('afternodedrag', shape);
    }
};
var DragNode = (function (_super) {
    __extends(DragNode, _super);
    function DragNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-drag-node';
        _this.register(Event);
        return _this;
    }
    DragNode.prototype.getEvents = function () {
        return {
            "node:dragstart": "onNodeDragStart",
            'node:drag': 'onNodeDrag',
            "node:dragend": 'onNodeDragEnd'
        };
    };
    return DragNode;
}(registerBehavior_1.default));
exports.default = DragNode;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    originInfo: null,
    target: null,
    isSameNode: function (e) {
        return e.target.getParent() && e.target.getParent().getParent() && e.target.getParent().getParent().get('item') === this.originInfo.sourceNode;
    },
    onDragLeave: function (e) {
        if (!this.originInfo)
            return;
        e.item.setHotspotActived(false);
        this.originInfo.targetNode = null;
        this.originInfo.targetAnchor = null;
    },
    onDragEnter: function (e) {
        if (!this.originInfo)
            return;
        e.item.setHotspotActived(true);
        if (!this.isSameNode(e)) {
            this.originInfo.targetNode = e.target.getParent().getParent().get('item');
            this.originInfo.targetAnchor = e.item.get('index');
        }
    },
    onDrag: function (e) {
        this._updateEdgeDelegate(this.target, e.x, e.y);
    },
    _updateEdgeDelegate: function (item, x, y) {
        var edgeShape = item.get('edgeDelegate');
        var self = this;
        if (!edgeShape) {
            var parent_1 = self.graph.get('group');
            edgeShape = parent_1.addShape('line', {
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
    onDragStart: function (e) {
        var anchorIndex = e.item.get("index");
        var sourceNode = e.target.getParent().getParent().get("item");
        var model = sourceNode.get('model');
        var point = sourceNode.getAnchorPoints(model)[anchorIndex];
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
    onDragEnd: function (e) {
        this.clearAllAnchor();
        var delegateShape = e.item.get('edgeDelegate');
        if (delegateShape) {
            delegateShape.remove();
        }
        var edgeEndCallback = this.graph.get('edgeEndCallback');
        var isAddEdge = edgeEndCallback(this.originInfo.sourceNode, this.originInfo.targetNode);
        if (!isAddEdge)
            return;
        if (this.originInfo.targetNode) {
            this.graph.add('edge', __assign({ source: this.originInfo.sourceNode.get('id'), target: this.originInfo.targetNode.get('id'), sourceAnchor: this.originInfo.sourceAnchor, targetAnchor: this.originInfo.targetAnchor, type: 'cvte-polyline' }, isAddEdge));
        }
        this.graph.setItemState(this.originInfo.sourceNode, 'hoverNode', false);
        this.graph.emit('onDargEdgeEnd', {
            sourceNode: this.originInfo.sourceNode,
            targetNode: this.originInfo.targetNode
        });
        var MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
    },
    clearAllAnchor: function () {
        var allNode = this.graph.getNodes();
        allNode.forEach(function (node) {
            var group = node.getContainer();
            group.clearAnchor();
        });
        this.graph.setItemState(this.originInfo.sourceNode, 'hover', false);
    },
    showAllAnchor: function (func) {
        var _this = this;
        var allNode = this.graph.getNodes();
        var sourceGroupId = this.originInfo.sourceNode.getModel().groupId;
        allNode.forEach(function (node) {
            var group = node.getContainer();
            if (_this.originInfo.sourceNode === node) {
                group.anchorShapes.forEach(function (a) {
                    a.get('item').showHotpot();
                    var index = a.get('item').get('index');
                    if (index === _this.originInfo.sourceAnchor)
                        _this.graph.setItemState(a.get('item'), 'anchor-active', true);
                });
                return;
            }
            group.showAnchor();
            group.anchorShapes.forEach(function (a) { return a.get('item').showHotpot(); });
        });
    }
};
var HoverAnchor = (function (_super) {
    __extends(HoverAnchor, _super);
    function HoverAnchor(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-drag-anchor';
        _this.register(Event);
        return _this;
    }
    HoverAnchor.prototype.getEvents = function () {
        return {
            "anchor:dragstart": "onDragStart",
            "anchor:dragend": "onDragEnd",
            "anchor:dragenter": "onDragEnter",
            "anchor:dragleave": "onDragLeave",
            "anchor:drag": "onDrag"
        };
    };
    return HoverAnchor;
}(registerBehavior_1.default));
exports.default = HoverAnchor;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onNodeClick: function (e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectNode', true);
        this.graph.set('selectedItem', e.item);
        this.graph.emit('onSelectNode', e.item);
        var group = e.item.get('group');
        this.graph.emit('onSelectNode', e.item, group);
        this.graph.set('noKeyDown', false);
    },
    onEdgeClick: function (e) {
        this.clearAllSelected();
        this.graph.setItemState(e.item, 'selectEdge', true);
        this.graph.set('selectedItem', e.item);
        this.graph.set('noKeyDown', false);
        var group = e.item.get('group');
        this.graph.emit('onSelectedEdge', e.item, group);
    },
    onCanvasClick: function (e) {
        this.graph.set('noKeyDown', false);
        this.clearAllSelected();
    },
    clearAllSelected: function () {
        var _this = this;
        var selectedNode = this.graph.findAllByState('node', 'selectNode');
        this.graph.set('selectedItem', null);
        var selectedEdge = this.graph.findAllByState('edge', 'selectEdge');
        selectedNode.forEach(function (node) {
            _this.graph.setItemState(node, 'selectNode', false);
        });
        selectedEdge.forEach(function (node) {
            _this.graph.setItemState(node, 'selectEdge', false);
        });
        this.graph.emit('onClearSelectNode', null);
    },
    onNodeDoubleClick: function (e) {
        this.graph.setItemState(e.item, 'selectNode', true);
        this.graph.set('selectedItem', e.item);
        this.graph.emit('onDoubleClickNode', e.item);
        this.graph.set('noKeyDown', false);
    }
};
var SelectNode = (function (_super) {
    __extends(SelectNode, _super);
    function SelectNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-select-node';
        _this.register(Event);
        return _this;
    }
    SelectNode.prototype.getEvents = function () {
        return {
            'node:click': 'onNodeClick',
            'canvas:click': 'onCanvasClick',
            'edge:click': 'onEdgeClick',
            'node:dblclick': 'onNodeDoubleClick'
        };
    };
    return SelectNode;
}(registerBehavior_1.default));
exports.default = SelectNode;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onEdgeMouseEnter: function (e) {
        this.graph.setItemState(e.item, 'hoverEdge', true);
    },
    onEdgeMouseLeave: function (e) {
        this.graph.setItemState(e.item, 'hoverEdge', false);
    }
};
var HoverNode = (function (_super) {
    __extends(HoverNode, _super);
    function HoverNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-hover-edge';
        _this.register(Event);
        return _this;
    }
    HoverNode.prototype.getEvents = function () {
        return {
            'edge:mouseenter': 'onEdgeMouseEnter',
            'edge:mouseleave': 'onEdgeMouseLeave'
        };
    };
    return HoverNode;
}(registerBehavior_1.default));
exports.default = HoverNode;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onKeyDown: function (e) {
        var item = this.graph.get('selectedItem');
        if (this.graph.get('noKeyDown')) {
            return;
        }
        if (e.keyCode === 8 && item) {
            var MacroCommand = this.graph.get('MacroCommand');
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
var HoverNode = (function (_super) {
    __extends(HoverNode, _super);
    function HoverNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-delete-item';
        _this.register(Event);
        return _this;
    }
    HoverNode.prototype.getEvents = function () {
        return {
            'keydown': 'onKeyDown'
        };
    };
    return HoverNode;
}(registerBehavior_1.default));
exports.default = HoverNode;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onMouseUp: function (e) {
        var addNodeDragging = this.graph.get('addNodeDragging');
        if (!addNodeDragging)
            return;
        var addNodeModel = this.graph.get('addNodeModel');
        var viewPoint = this.graph.getPointByClient(e.clientX, e.clientY);
        var x = viewPoint.x - addNodeModel.offsetX;
        var y = viewPoint.y - addNodeModel.offsetY;
        var nodeId = new Date().getTime();
        var model = __assign({ type: addNodeModel.nodeType, id: "" + nodeId, x: x,
            y: y, style: __assign({}, addNodeModel) }, addNodeModel.model);
        this.graph.addItem('node', model);
        this.graph.paint();
        this.graph.emit('onAddPanelNode', model);
        var MacroCommand = this.graph.get('MacroCommand');
        MacroCommand && MacroCommand.executeCommand('docat', { graph: this.graph });
    }
};
var CoverAddNode = (function (_super) {
    __extends(CoverAddNode, _super);
    function CoverAddNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-add-node';
        _this.register(Event);
        return _this;
    }
    CoverAddNode.prototype.getEvents = function () {
        return {
            'canvas:mouseup': 'onMouseUp',
        };
    };
    return CoverAddNode;
}(registerBehavior_1.default));
exports.default = CoverAddNode;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(5);
var matrix_util_1 = __webpack_require__(36);
var registerBehavior_1 = __importDefault(__webpack_require__(0));
var Event = {
    onDrag: function (shape) {
        this._clearAlignLine();
        this._itemAlign(shape);
    },
    onDragEnd: function () {
        this._clearAlignLine();
    },
    getDefaultCfg: function () {
        return {
            alignLineStyle: { stroke: '#540000', lineWidth: 1 },
            tolerance: 4,
            _alignLines: [],
        };
    },
    _itemAlign: function (item) {
        var _this = this;
        var bbox = item.getBBox();
        var ct = { x: bbox.x + bbox.width / 2, y: bbox.y };
        var cc = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
        var cb = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height };
        var lc = { x: bbox.x, y: bbox.y + bbox.height / 2 };
        var rc = { x: bbox.x + bbox.width, y: bbox.y + bbox.height / 2 };
        var nodes = item._attrs && item._attrs.nodeId ? this.graph.getNodes().filter(function (n) { return n.get('id') !== item._attrs.nodeId; }) : this.graph.getNodes();
        util_1.each(nodes, function (node) {
            var horizontalLines = [];
            var verticalLines = [];
            var p = null;
            var bbox1 = node.getBBox();
            util_1.each(_this.getHorizontalLines(bbox1), function (line) {
                horizontalLines.push(_this.getDistance(line, ct));
                horizontalLines.push(_this.getDistance(line, cc));
                horizontalLines.push(_this.getDistance(line, cb));
            });
            util_1.each(_this.getVerticalLines(bbox1), function (line) {
                verticalLines.push(_this.getDistance(line, lc));
                verticalLines.push(_this.getDistance(line, cc));
                verticalLines.push(_this.getDistance(line, rc));
            });
            horizontalLines.sort(function (a, b) { return a.dis - b.dis; });
            verticalLines.sort(function (a, b) { return a.dis - b.dis; });
            if (horizontalLines.length > 0 && horizontalLines[0].dis < _this.tolerance) {
                item.attr({ y: horizontalLines[0].line[1] - horizontalLines[0].point.y + bbox.y });
                p = { horizontals: [horizontalLines[0]] };
                for (var i = 1; i < 3; i++)
                    horizontalLines[0].dis === horizontalLines[i].dis && p.horizontals.push(horizontalLines[i]);
            }
            if (verticalLines.length > 0 && verticalLines[0].dis < _this.tolerance) {
                item.attr({ x: verticalLines[0].line[0] - verticalLines[0].point.x + bbox.x });
                p ? p.verticals = [verticalLines[0]] : p = { verticals: [verticalLines[0]] };
                for (var i = 1; i < 3; i++)
                    verticalLines[0].dis === verticalLines[i].dis && p.verticals.push(verticalLines[i]);
            }
            if (p) {
                p.bbox = bbox;
                _this._addAlignLine(p);
            }
        });
    },
    _addAlignLine: function (p) {
        var group = this.graph.get('group');
        var bbox = p.bbox;
        var lineStyle = this.alignLineStyle;
        var lineArr = this._alignLines;
        if (p.horizontals) {
            util_1.each(p.horizontals, function (lineObj) {
                var line = lineObj.line;
                var point = lineObj.point;
                var lineHalf = (line[0] + line[2]) / 2;
                var x1, x2;
                if (point.x < lineHalf) {
                    x1 = point.x - bbox.width / 2;
                    x2 = Math.max(line[0], line[2]);
                }
                else {
                    x1 = point.x + bbox.width / 2;
                    x2 = Math.min(line[0], line[2]);
                }
                var shape = group.addShape('line', { attrs: util_1.mix({ x1: x1, y1: line[1], x2: x2, y2: line[1] }, lineStyle), capture: false });
                lineArr.push(shape);
            });
        }
        if (p.verticals) {
            util_1.each(p.verticals, function (lineObj) {
                var line = lineObj.line;
                var point = lineObj.point;
                var lineHalf = (line[1] + line[3]) / 2;
                var y1, y2;
                if (point.y < lineHalf) {
                    y1 = point.y - bbox.height / 2;
                    y2 = Math.max(line[1], line[3]);
                }
                else {
                    y1 = point.y + bbox.height / 2;
                    y2 = Math.min(line[1], line[3]);
                }
                var shape = group.addShape('line', { attrs: util_1.mix({ x1: line[0], y1: y1, x2: line[0], y2: y2 }, lineStyle), capture: false });
                lineArr.push(shape);
            });
        }
    },
    getHorizontalLines: function (bbox) {
        return [
            [bbox.minX, bbox.minY, bbox.maxX, bbox.minY],
            [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY],
            [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY],
        ];
    },
    getVerticalLines: function (bbox) {
        return [
            [bbox.minX, bbox.minY, bbox.minX, bbox.maxY],
            [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY],
            [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY],
        ];
    },
    getDistance: function (line, point) {
        return { line: line, point: point, dis: this.pointLineDistance(line[0], line[1], line[2], line[3], point.x, point.y) };
    },
    pointLineDistance: function (lineX1, lineY1, lineX2, lineY2, pointX, pointY) {
        var lineLength = [lineX2 - lineX1, lineY2 - lineY1];
        if (matrix_util_1.vec2.exactEquals(lineLength, [0, 0]))
            return NaN;
        var s = [-lineLength[1], lineLength[0]];
        matrix_util_1.vec2.normalize(s, s);
        return Math.abs(matrix_util_1.vec2.dot([pointX - lineX1, pointY - lineY1], s));
    },
    _clearAlignLine: function () {
        util_1.each(this._alignLines, function (line) {
            line.remove();
        });
        this._alignLines = [];
        this.graph.paint();
    },
};
var AlignNode = (function (_super) {
    __extends(AlignNode, _super);
    function AlignNode(Grid) {
        var _this = _super.call(this, Grid) || this;
        _this.name = 'cover-align-node';
        _this.register(Event);
        return _this;
    }
    AlignNode.prototype.getEvents = function () {
        return {
            'afternodedrag': 'onDrag',
            'afternodedragend': 'onDragEnd'
        };
    };
    return AlignNode;
}(registerBehavior_1.default));
exports.default = AlignNode;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@antv/matrix-util");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutSetting = void 0;
var layoutDefault = {
    type: 'dagre',
    align: 'DL',
    nodesep: 20,
    ranksep: 50,
    controlPoints: true,
};
exports.layoutSetting = {
    horizontal: __assign(__assign({}, layoutDefault), { rankdir: 'LR' }),
    vertical: __assign(__assign({}, layoutDefault), { rankdir: 'TB' })
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowUtil = void 0;
var FlowUtil = (function () {
    function FlowUtil() {
        this.debounce = function (func, timer) {
            var timeout = null;
            return function () {
                if (!timeout) {
                    timeout = setTimeout(func, timer);
                    return;
                }
                ;
                clearTimeout(timeout);
                timeout = setTimeout(func, timer);
            };
        };
        this.throttle = function () { };
    }
    return FlowUtil;
}());
exports.FlowUtil = FlowUtil;


/***/ })
/******/ ])["default"];
});